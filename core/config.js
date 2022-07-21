import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBwh1VIZoGW-D_ex6ek7e7LXr3gC026r1o",
  authDomain: "labadaapp2.firebaseapp.com",
  projectId: "labadaapp2",
  storageBucket: "labadaapp2.appspot.com",
  messagingSenderId: "248930090038",
  appId: "1:248930090038:web:ee5e77f56206c188576c97"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
