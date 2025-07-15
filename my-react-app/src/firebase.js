// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration    
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDejmugqQdr4q-asVK5iZfBQZ67STyz-Fk",
  authDomain: "nova-frontend.firebaseapp.com",
  projectId: "nova-frontend",
  storageBucket: "nova-frontend.firebasestorage.app",
  messagingSenderId: "68756171588",
  appId: "1:68756171588:web:982d99f4c6ff29189a8511",
  measurementId: "G-11CR4X6YHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
