import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDEd6YTcqn_o5xW5azEyvwANSK7fIbCjzU",
  authDomain: "linkedin-clone-516a4.firebaseapp.com",
  projectId: "linkedin-clone-516a4",
  storageBucket: "linkedin-clone-516a4.appspot.com",
  messagingSenderId: "809829768387",
  appId: "1:809829768387:web:e21112a5b1360c5c1a1676",
  measurementId: "G-9F2PNMGCLM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
