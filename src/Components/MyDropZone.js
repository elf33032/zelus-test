import React, {useMemo, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import classes from "./MyDropZone.module.css"

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#AAFF00'
};

const rejectStyle = {
    borderColor: '#FF4500'
};

function MyDropZone(props) {
    const onDrop = useCallback(accepted => {
        // Do something with the files
        props.updateFile(accepted[0]);
    }, [])
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {'image/*': []}
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);
    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
                {errors.map(e => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>
    ));
    return (
        <div className={classes.container}>
            <div {...getRootProps({style})}>
                <input {...getInputProps()}/>
                <p className={classes.mainText}>Drag & Drop Files to Upload, or Click to Select Files</p>
                <p>Support: .png .jpg .jpeg .pdf</p>
                <h4>Accepted files</h4>
                <ul>{acceptedFileItems}</ul>
                <h4>Rejected files</h4>
                <ul>{fileRejectionItems}</ul>
            </div>
        </div>

    );
}

export default MyDropZone;