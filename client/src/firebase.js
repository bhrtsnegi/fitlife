// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-trial-e863d.firebaseapp.com",
  projectId: "mern-trial-e863d",
  storageBucket: "mern-trial-e863d.appspot.com",
  messagingSenderId: "1086788498825",
  appId: "1:1086788498825:web:3c9f9636b363d397641d58",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);