// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsXuA5G0s48LEvcwAb1gWkHKbXWBMBDQM",
  authDomain: "daisy-personal-site.firebaseapp.com",
  projectId: "daisy-personal-site",
  storageBucket: "daisy-personal-site.appspot.com",
  messagingSenderId: "1058069721274",
  appId: "1:1058069721274:web:410a006390284bffc15283",
  measurementId: "G-TGH4SZGJL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
