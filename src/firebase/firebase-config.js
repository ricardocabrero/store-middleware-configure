
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC_9tgaNd_Q-gQ0kYDmunjcshle7L9cddU",
    authDomain: "journal-app-6ca24.firebaseapp.com",
    projectId: "journal-app-6ca24",
    storageBucket: "journal-app-6ca24.appspot.com",
    messagingSenderId: "270771401748",
    appId: "1:270771401748:web:c27cff6adcd8d63d986301"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore;
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
}