// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from "firebase"
// import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiz5EhDh1fOr5PN0j53-n40MHfatkUaaw",
  authDomain: "login-demo-954bd.firebaseapp.com",
  projectId: "login-demo-954bd",
  storageBucket: "login-demo-954bd.appspot.com",
  messagingSenderId: "46946629370",
  appId: "1:46946629370:web:d8c88a4b65783b433fbb43"
};

// Initialize Firebase
let app;
if(firebase.app.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

export const auth = firebase.auth()


