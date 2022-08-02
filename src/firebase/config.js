// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzc58Un9JQlejYks5rkJLKatCA3hyX76M",
  authDomain: "react-fh-curso.firebaseapp.com",
  projectId: "react-fh-curso",
  storageBucket: "react-fh-curso.appspot.com",
  messagingSenderId: "66156676939",
  appId: "1:66156676939:web:d9cacd51cbb0dadc384ace",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
