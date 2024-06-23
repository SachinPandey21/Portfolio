import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA-4hZoMk-tfFl7COQfxZPsi3Iw-dL5kNU",
  authDomain: "portfolio-sachinpandey.firebaseapp.com",
  projectId: "portfolio-sachinpandey",
  storageBucket: "portfolio-sachinpandey.appspot.com",
  messagingSenderId: "393118548846",
  appId: "1:393118548846:web:6048a89e9cfe566c93777f",
  measurementId: "G-JJM32L8E8J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;