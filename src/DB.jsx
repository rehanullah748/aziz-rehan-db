import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCLC-scISpV3uJW0jflQKneG0VLjAf20ok",
  authDomain: "syahtop-crud.firebaseapp.com",
  projectId: "syahtop-crud",
  storageBucket: "syahtop-crud.appspot.com",
  messagingSenderId: "60021974233",
  appId: "1:60021974233:web:f376ee4cfdc6db3f8c4ac8",
  measurementId: "G-BP2VJEGGPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DataBase = getFirestore(app);
export default DataBase;