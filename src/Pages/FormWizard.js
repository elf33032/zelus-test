import {useState} from "react";
import {ref, uploadBytes} from "firebase/storage";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";
import {storage} from "../Firebase/Firebase";

function FormWizard(){
    //navigate between pages without url routing
    const[page, setPage] = useState(1);
    //json data
    const[data, setData] = useState({});
    //picture files
    const[files, setFiles] = useState({});

    function nextPageAndUpdateHandler(newVal){
        setData(data => ({...data, ...newVal}));
        setPage(page+1);
    }
    function submitDataHandler(){
        console.log("Data is: ");
        console.log(data);
        console.log("Files is: ");
        console.log(files);
        // Send HTML POST to Firebase realtime DB api
        fetch(
            "https://zelus-test-default-rtdb.firebaseio.com/userInfo.json",
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        );

        // Upload files into Firebase Storage
        // Into sub-folder of /images/[first name].[last name]/
        console.log("HERE IS MY FILE")
        for (const file in files){
            console.log(files[file]);
            const storageRef = ref(storage,`images/${data["firstName"]}_${data["lastName"]}/${files[file].name}`);
            uploadBytes(storageRef, files[file]).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
        }

        //Go to the final page
        setPage(page+1);
    }
    function prevPage(){
        setPage(page-1);
    }
    return(
        <div>
            {page === 1 && <FormPage1 onUpdate={nextPageAndUpdateHandler} default={data}/>}
            {page === 2 && <FormPage2 onUpdate={submitDataHandler}  updateFiles={setFiles} onBack={prevPage}/>}
            {page === 3 && <FormPage3/>}
        </div>
    );
}

export default FormWizard;