// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiBbNHvFDhy45t6_zjW2shoQV7xqNB_-Q",
  authDomain: "feedback-10879.firebaseapp.com",
  databaseURL: "https://feedback-10879-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "feedback-10879",
  storageBucket: "feedback-10879.appspot.com",
  messagingSenderId: "1005364913540",
  appId: "1:1005364913540:web:939a6f00ece16677d969d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imgDB = getStorage(app)