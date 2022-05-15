import {useRef} from "react";
import {Button, TextField, FormLabel} from "@mui/material";
import classes from "./Page.module.css";

function FormPage1(props){
    //Reference to textFields
    const propertyNameInputRef = useRef();
    const streetInputRef = useRef();
    const aptInputRef = useRef();
    const cityInputRef = useRef();
    const stateInputRef = useRef();
    const zipInputRef = useRef();
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();

    function submitHandler(event){
        console.log("SUBMIT REQUEST")
        event.preventDefault();
        const enteredPropertyName = propertyNameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredApt = aptInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredState = stateInputRef.current.value;
        const enteredZip = zipInputRef.current.value;
        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;

        const updateData = {
            //Address are not collapse under child element for data preserve convenience
            //Therefore we are not accessing non-existed element within non-existed element
            propertyName: enteredPropertyName,
            street: enteredStreet,
            apt: enteredApt,
            city: enteredCity,
            state: enteredState,
            zip: enteredZip,
            firstName: enteredFirstName,
            lastName: enteredLastName
        };
        props.onUpdate(updateData);
    }

    return(
        /*
        Forms below supports:
        Preserve form value in memory
        Input ref by using controlled form
        Every row of element has class name of "item"
        "item" are flex box with 1:3 label:content partition
        "input" are flex box with 3 grid in total to make sure the alignment of the form
         */

        <form onSubmit={submitHandler}>
            <div className={classes.item}>
                <FormLabel id = "Property Name" sx={{mt: 2}} className={classes.label}> Property Name: </FormLabel>
                <div className={classes.input}>
                    <TextField id = "Property Name"
                               label = "Property Name"
                               variant = "outlined"
                               size = "small"
                               className={classes.flex3}
                               sx={{m: 1}}
                               inputRef={propertyNameInputRef}
                               defaultValue={props.default["propertyName"]}
                    ></TextField>
                </div>
            </div>
            <div className={classes.item}>
                <FormLabel id = "* Property Address" sx={{mt: 2}} className={classes.label}> Property Name: </FormLabel>
                <div className={classes.input}>
                    <TextField id = "Street Address"
                               label = "Street Address"
                               variant = "outlined"
                               size = "small"
                               sx={{m: 1}}
                               className={classes.flex2}
                               inputRef={streetInputRef}
                               required
                               defaultValue={props.default["street"]}
                    ></TextField>
                    <TextField id = "APT Number"
                               label = "Apt Number"
                               variant = "outlined"
                               size = "small"
                               className={classes.flex1}
                               sx={{m: 1}}
                               inputRef={aptInputRef}
                               defaultValue={props.default["apt"]}
                    ></TextField>
                </div>
            </div>
            <div className={classes.item}>
                <p className={classes.label} />
                <div className={classes.input}>
                    <TextField id = "City"
                               label = "City"
                               variant = "outlined"
                               size = "small"
                               sx={{m: 1}}
                               className={classes.flex1}
                               required
                               inputRef={cityInputRef}
                               defaultValue={props.default["city"]}
                    ></TextField>
                    <TextField id = "State"
                               label = "State"
                               variant = "outlined"
                               size = "small"
                               className={classes.flex1}
                               sx={{m: 1}}
                               required
                               inputRef={stateInputRef}
                               defaultValue={props.default["state"]}
                    ></TextField>
                    <TextField id = "ZIP Code"
                               label = "ZIP Code"
                               variant = "outlined"
                               size = "small"
                               className={classes.flex1}
                               sx={{m: 1}}
                               required
                               inputRef={zipInputRef}
                               defaultValue={props.default["zip"]}
                    ></TextField>
                </div>
            </div>
            <div className={classes.item}>
                <FormLabel id = "First Name" sx={{mt: 2}} className={classes.label}> Owner's First Name: </FormLabel>
                <div className={classes.input}>
                    <TextField id = "First Name"
                               label = "First Name"
                               variant = "outlined"
                               size = "small"
                               className={classes.flex3}
                               sx={{m: 1}}
                               inputRef={firstNameInputRef}
                               required
                               defaultValue={props.default["firstName"]}
                    ></TextField>
                </div>
            </div>
            <p className={classes.comment}>Please enter owner's name which is able to find on public record</p>
            <div className={classes.item}>
                <FormLabel id = "Last Name" sx={{mt: 2}} className={classes.label}> Owner's Last Name: </FormLabel>
                <div className={classes.input}>
                    <TextField id = "Last Name"
                               label = "Last Name"
                               variant = "outlined"
                               size = "small"
                               className={classes.flex3}
                               sx={{m: 1}}
                               inputRef={lastNameInputRef}
                               required
                               defaultValue={props.default["lastName"]}
                    ></TextField>
                </div>
            </div>
            <p className={classes.comment}>Please enter owner's name which is able to find on public record</p>
            <div className={classes.buttons}>
                <Button variant = "contained" type = "submit">Next</Button>
            </div>
        </form>
    );
}

export default FormPage1;