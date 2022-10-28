// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBllpZb_CoAVQfEl0JzA0DRq8VBHY9FtCk",
  authDomain: "ema-john-auth-6b385.firebaseapp.com",
  projectId: "ema-john-auth-6b385",
  storageBucket: "ema-john-auth-6b385.appspot.com",
  messagingSenderId: "134334915123",
  appId: "1:134334915123:web:dd736de72fa869df5e3946",
  measurementId: "G-NS1W9978BB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app, analytics};