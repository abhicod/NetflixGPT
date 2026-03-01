// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhU1gr3AMPNsnWUwUqvzWmsXkswQL9yD4",
  authDomain: "netflixgpt-7cc79.firebaseapp.com",
  projectId: "netflixgpt-7cc79",
  storageBucket: "netflixgpt-7cc79.firebasestorage.app",
  messagingSenderId: "918561534951",
  appId: "1:918561534951:web:afd7c2a639276b03ee0342",
  measurementId: "G-2ENSE9S4C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();