import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyACeC5EEjkCohMlXFy6wBMFsk-ONe28IT4",
  authDomain: "ecommerce-47912.firebaseapp.com",
  projectId: "ecommerce-47912",
  storageBucket: "ecommerce-47912.appspot.com",
  messagingSenderId: "709567593246",
  appId: "1:709567593246:web:64e862d3528a8663a4270f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
