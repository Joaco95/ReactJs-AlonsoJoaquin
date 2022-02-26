// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAelA1AoNmGehP9Hr9YWGireEjZTsCCbJs",
  authDomain: "react-coderhouse-62f49.firebaseapp.com",
  projectId: "react-coderhouse-62f49",
  storageBucket: "react-coderhouse-62f49.appspot.com",
  messagingSenderId: "613303958491",
  appId: "1:613303958491:web:70beef936fe45a230805fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
