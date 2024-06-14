// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDpPqshSxUfFHHuVFCVTKy498ST97VKk8",
  authDomain: "liquid-sense.firebaseapp.com",
  projectId: "liquid-sense",
  storageBucket: "liquid-sense.appspot.com",
  messagingSenderId: "441987445068",
  appId: "1:441987445068:web:be8927dce539e9693c1fe9",
  measurementId: "G-BLP3WP731T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);