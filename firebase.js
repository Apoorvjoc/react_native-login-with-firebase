// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/compat'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbniNWKJkfset9OMS3SncPaSv2Y7U4gu0",
  authDomain: "rn-login-auth-be3d2.firebaseapp.com",
  projectId: "rn-login-auth-be3d2",
  storageBucket: "rn-login-auth-be3d2.appspot.com",
  messagingSenderId: "168204589386",
  appId: "1:168204589386:web:3b6792b39c757622e609b3"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app();
}

const auth = firebase.auth();

export {auth};