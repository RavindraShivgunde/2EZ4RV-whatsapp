import firebase from "firebase";

const firebaseConfig ={
  apiKey: "AIzaSyAt4fDJ-07_GLT6LO4XX8MD8gdkjnAKZ3k",
  authDomain: "whatsapp-clone-rvking.firebaseapp.com",
  projectId: "whatsapp-clone-rvking",
  storageBucket: "whatsapp-clone-rvking.appspot.com",
  messagingSenderId: "944241136766",
  appId: "1:944241136766:web:d5fc5ff31fd0225d4a742f",
  measurementId: "G-QW1FH7RZFJ"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db;


