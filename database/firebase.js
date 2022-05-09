import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDiYfTLZ-82B62MWX8Sqp7IJhfhe_qdSK8",
  authDomain: "labmoviles-a382b.firebaseapp.com",
  projectId: "labmoviles-a382b",
  storageBucket: "labmoviles-a382b.appspot.com",
  messagingSenderId: "411700048695",
  appId: "1:411700048695:web:8410c59bc3e05fa329a0b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

export default {app, db, auth}
