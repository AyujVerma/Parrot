// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByOJogGAsBvb_ecjBV7hL_2JKagQvP8Zg",
  authDomain: "parrot-app-ut.firebaseapp.com",
  databaseURL: "https://parrot-app-ut-default-rtdb.firebaseio.com",
  projectId: "parrot-app-ut",
  storageBucket: "parrot-app-ut.appspot.com",
  messagingSenderId: "363325936567",
  appId: "1:363325936567:web:dfef95f92c5214bcad0e32",
  measurementId: "G-ESYY2DLEJW"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db = getDatabase(app);

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;