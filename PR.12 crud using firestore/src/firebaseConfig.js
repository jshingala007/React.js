// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7uRUHAIxuUG-c816pELZVfa39kXex-Us",
  authDomain: "realtime-detabase-962c0.firebaseapp.com",
  databaseURL: "https://realtime-detabase-962c0-default-rtdb.firebaseio.com",
  projectId: "realtime-detabase-962c0",
  storageBucket: "realtime-detabase-962c0.firebasestorage.app",
  messagingSenderId: "898761239465",
  appId: "1:898761239465:web:be1f63cb535559f42732b8",
  measurementId: "G-5EZF1V1BKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);