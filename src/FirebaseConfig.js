// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcyJKEiQMN0trbduUNCL4_K9RKF3DoyjE",
  authDomain: "postapp-demo-50b67.firebaseapp.com",
  projectId: "postapp-demo-50b67",
  storageBucket: "postapp-demo-50b67.appspot.com",
  messagingSenderId: "511303933215",
  appId: "1:511303933215:web:f85ac8c7d9695bcf6fe42a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new FacebookAuthProvider();

export { auth, provider };
