import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBml4fnwbHT0YgCU1i1NEqgD1X4f4IR0jY",
  authDomain: "linkedin-clone-47103.firebaseapp.com",
  projectId: "linkedin-clone-47103",
  storageBucket: "linkedin-clone-47103.appspot.com",
  messagingSenderId: "768245239514",
  appId: "1:768245239514:web:065e1aac32f4efb4c11fe3",
  measurementId: "G-XZW922DH7Y",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
