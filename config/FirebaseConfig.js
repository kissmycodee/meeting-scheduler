// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: " process.env.NEXT_PUBLIC_FIREBASE_API_KEY",
  authDomain: "meeting-scheduler-1cbff.firebaseapp.com",
  projectId: "meeting-scheduler-1cbff",
  storageBucket: "meeting-scheduler-1cbff.appspot.com",
  messagingSenderId: "163697171619",
  appId: "1:163697171619:web:e3ec661c78ad40d36a3316",
  measurementId: "G-8BS3NY88JM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
