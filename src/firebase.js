import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJcYs61oscATSeTocCIQeDiLf-pKa8EJc",
    authDomain: "snapchat-clone-1a6d0.firebaseapp.com",
    projectId: "snapchat-clone-1a6d0",
    storageBucket: "snapchat-clone-1a6d0.appspot.com",
    messagingSenderId: "300236676601",
    appId: "1:300236676601:web:6ac8652d689d414faff128"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };