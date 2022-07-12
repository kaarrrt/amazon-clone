// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDKSXpCaNzBJWhDoGQeWzKNpLKta67Jr44",
    authDomain: "clone-2b386.firebaseapp.com",
    projectId: "clone-2b386",
    storageBucket: "clone-2b386.appspot.com",
    messagingSenderId: "501499142202",
    appId: "1:501499142202:web:afdd0cf8c32dfd16d11503",
    measurementId: "G-8GWLSZ5KTM"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth};