// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVcgKIf-Uh0vVm-olEAjhv55T449Gkw6k",
  authDomain: "react-notes-595a1.firebaseapp.com",
  projectId: "react-notes-595a1",
  storageBucket: "react-notes-595a1.appspot.com",
  messagingSenderId: "1049155750445",
  appId: "1:1049155750445:web:62ebeeff94cb9b63b486a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")