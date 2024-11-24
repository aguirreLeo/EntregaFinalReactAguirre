// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKd1KPwG5pKDi-e-Cm7ZJ92Wad6Mk3-sg",
  authDomain: "tienda-leo-b7679.firebaseapp.com",
  projectId: "tienda-leo-b7679",
  storageBucket: "tienda-leo-b7679.firebasestorage.app",
  messagingSenderId: "424435438001",
  appId: "1:424435438001:web:aa166277d1533807c5ed90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);