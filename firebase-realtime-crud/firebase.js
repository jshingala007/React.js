// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBlmZzUj2OUy5vLX-n9xWgpNE8qytKtCLQ",
    authDomain: "crud-realtime-db-cda33.firebaseapp.com",
    databaseURL: "https://crud-realtime-db-cda33-default-rtdb.firebaseio.com",
    projectId: "crud-realtime-db-cda33",
    storageBucket: "crud-realtime-db-cda33.appspot.com",
    messagingSenderId: "854926618602",
    appId: "1:854926618602:web:1503b80dd808a457de4c93",
    measurementId: "G-79868K91V7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
