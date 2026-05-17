import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk_HHJ6g2fqlTc3JpwtBFw9nvho8h3_tk",
  authDomain: "expense-tracker-d082d.firebaseapp.com",
  projectId: "expense-tracker-d082d",
  storageBucket: "expense-tracker-d082d.firebasestorage.app",
  messagingSenderId: "150661717096",
  appId: "1:150661717096:web:ce494e3ba0f72d8705efdd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);