import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAghafMxaM4AUzX6UFIyELBSJ4hlNXyIb8",
  authDomain: "curso-react-0.firebaseapp.com",
  projectId: "curso-react-0",
  storageBucket: "curso-react-0.appspot.com",
  messagingSenderId: "357305606350",
  appId: "1:357305606350:web:435603ab44dc3e9b4f709f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

