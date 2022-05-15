
import MyDropZone from "../Components/MyDropZone";
import{useState} from "react";
import Button from "@mui/material/Button";
import classes from "./Page.module.css";
import {FormLabel} from "@mui/material";

function FormPage2(props){
    const[isPassport, setIsPassport] = useState(false);
    const[isSSN, setIsSSN] = useState(false);

    function onSubmitHandler(event){
        /*
        When user submit by clicking next button
        We check if all required are satisfied
        */
        event.preventDefault();
        console.log(isSSN, isPassport);
        if(isPassport && isSSN){
            props.onUpdate();
        }else{
            alert("Please upload both pictures of your Passport and SSN.")
        }
    }
    //Set files state in FormWizard page, and set file loaded conditions
    function setPassport(file){
        const newEntry = {passport: file};
        props.updateFiles(files=>({...files, ...newEntry}));
        setIsPassport(true);
    }
    function setSSN(file){
        const newEntry = {ssn: file};
        props.updateFiles(files=>({...files, ...newEntry}));
        setIsSSN(true);
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <div className={classes.item}>
                <FormLabel id = "Passport" sx={{mt: 2, mr: 1}} className={classes.label}>* Owner's Passport: </FormLabel>
                <MyDropZone updateFile={setPassport}/>
            </div>
            <div className={classes.item}>
                <FormLabel id = "SSN" sx={{mt: 2, mr: 1}} className={classes.label}>* Owner's SSN: </FormLabel>
                <MyDropZone updateFile={setSSN}/>
            </div>
            {!(isPassport && isSSN) && <p className={classes.comment}>* Please Upload All Documents</p>}
            <div className={classes.buttons}>
                <Button variant = "outlined" onClick={props.onBack}> Previous </Button>
                <Button variant = "contained" type = "submit"> Next </Button>
            </div>
        </form>
    );
}

export default FormPage2;