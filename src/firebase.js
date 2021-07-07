import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvcuNXTggXkZeBpWIgkaN2eboUF7BqM3k",
  authDomain: "linkedin-mahfuz55.firebaseapp.com",
  projectId: "linkedin-mahfuz55",
  storageBucket: "linkedin-mahfuz55.appspot.com",
  messagingSenderId: "332919025596",
  appId: "1:332919025596:web:c11e4c9f29ad2423e305b9",
  measurementId: "G-7DJPDKD56L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
