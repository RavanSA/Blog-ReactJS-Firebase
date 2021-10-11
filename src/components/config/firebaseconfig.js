import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyD6WutxMrlFLX1Du8mf4eHKOBhfk7JEZMs",
    authDomain: "react-blog-project-f6cfb.firebaseapp.com",
    projectId: "react-blog-project-f6cfb",
    storageBucket: "react-blog-project-f6cfb.appspot.com",
    messagingSenderId: "689030844148",
    appId: "1:689030844148:web:830d93c8c04147f9acd8a1",
    measurementId: "G-E5BENWGZ8L"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true, merge:true});
export const storage = firebase.storage();
export default firebase;