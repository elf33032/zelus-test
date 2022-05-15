// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtEescXZEpP4vCZYw3dWOm6sCjWur_rL8",
    authDomain: "zelus-test.firebaseapp.com",
    databaseURL: "https://zelus-test-default-rtdb.firebaseio.com",
    projectId: "zelus-test",
    storageBucket: "zelus-test.appspot.com",
    messagingSenderId: "216873663096",
    appId: "1:216873663096:web:69201541f64388c1738b8d",
    measurementId: "G-0JPWKVK871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);