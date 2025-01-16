// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUnkkOVfwpXxGtOB1nHMVexSp2sVvfYIk",
  authDomain: "pizza-shop-36b3e.firebaseapp.com",
  projectId: "pizza-shop-36b3e",
  storageBucket: "pizza-shop-36b3e.firebasestorage.app",
  messagingSenderId: "805603293133",
  appId: "1:805603293133:web:d956a3600c45d0aa8f7684",
  measurementId: "G-G8DB1EZF3B"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
