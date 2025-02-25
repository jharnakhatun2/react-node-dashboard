// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoMHf6cYGr-96xx3tTHSbM3f6vwRsZRUo",
  authDomain: "bambo-brush.firebaseapp.com",
  projectId: "bambo-brush",
  storageBucket: "bambo-brush.firebasestorage.app",
  messagingSenderId: "611268782067",
  appId: "1:611268782067:web:f08d9878085736ed28d486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;