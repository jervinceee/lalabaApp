import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDOkEgMdXBoMzEouFTJnFZXNVXpfizG7W0",
    authDomain: "lalabaapp-5ab31.firebaseapp.com",
    projectId: "lalabaapp-5ab31",
    storageBucket: "lalabaapp-5ab31.appspot.com",
    messagingSenderId: "628103843419",
    appId: "1:628103843419:web:799e0d67e5367754ae397e",
    measurementId: "G-VV1M0DN9HQ"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);