// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging} from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHrEyFtRNHico1Psyq-6zjy6-4AwdQa4w",
  authDomain: "next-firebase-9f470.firebaseapp.com",
  projectId: "next-firebase-9f470",
  storageBucket: "next-firebase-9f470.appspot.com",
  messagingSenderId: "377365701522",
  appId: "1:377365701522:web:ff3f48a7628efab785d74b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const messaging = getMessaging(app);