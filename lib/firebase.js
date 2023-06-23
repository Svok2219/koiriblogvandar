
import { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqHK0r6UEqTlvcJqSx9TpXumABR4z0lKM",
  authDomain: "koirionthemove.firebaseapp.com",
  projectId: "koirionthemove",
  storageBucket: "koirionthemove.appspot.com",
  messagingSenderId: "65716779649",
  appId: "1:65716779649:web:26c68fb730d6816a986b80",
  measurementId: "G-71LMLF69XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



export const auth = getAuth()


