import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDizMk5wm7-JXgDAO8U25L9MFMGcRkHr_I",
  authDomain: "lalabaapp.firebaseapp.com",
  projectId: "lalabaapp",
  storageBucket: "lalabaapp.appspot.com",
  messagingSenderId: "652003400772",
  appId: "1:652003400772:web:d7d2c71de9e07d93e77011"
};x

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
