// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJvNAxDNZpiheP5YbEqiMLEBdiZU5hjOc",
  authDomain: "react-todo-fd854.firebaseapp.com",
  projectId: "react-todo-fd854",
  storageBucket: "react-todo-fd854.appspot.com",
  messagingSenderId: "499838129134",
  appId: "1:499838129134:web:5f42108113fdd1c85f34ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)