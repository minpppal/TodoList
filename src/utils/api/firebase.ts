// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfEYLn9SNgus591wE5UEjP9PX4k_Jn6fc",
  authDomain: "todolist-7fd81.firebaseapp.com",
  databaseURL: "https://todolist-7fd81-default-rtdb.firebaseio.com",
  projectId: "todolist-7fd81",
  storageBucket: "todolist-7fd81.appspot.com",
  messagingSenderId: "685883967529",
  appId: "1:685883967529:web:bf83547144d41c9df13438",
  measurementId: "G-RD8W102W38",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
