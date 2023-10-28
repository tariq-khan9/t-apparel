
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDJjGn27VDZ559TRM4h9dy65U96bVsrf54",
  authDomain: "t-apparel.firebaseapp.com",
  projectId: "t-apparel",
  storageBucket: "t-apparel.appspot.com",
  messagingSenderId: "797406958573",
  appId: "1:797406958573:web:57f924f8976699bd968de4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
