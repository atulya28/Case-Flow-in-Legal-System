import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDTv9EcQ7XnsvxVfXPlboNSAS3Hz9K9bcM",
    authDomain: "prathamikata.firebaseapp.com",
    projectId: "prathamikata",
    storageBucket: "prathamikata.appspot.com",
    messagingSenderId: "386562405151",
    appId: "1:386562405151:web:5216c8df275c050553f62a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export default firebaseApp;
