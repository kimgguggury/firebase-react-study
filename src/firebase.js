// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdL9pIQ3BUntxBGBW1wI1x_yobDfVFvn0",
  authDomain: "react-chat-app-5477d.firebaseapp.com",
  databaseURL : "https://react-chat-app-5477d-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "react-chat-app-5477d",
  storageBucket: "react-chat-app-5477d.firebasestorage.app",
  messagingSenderId: "1017607866300",
  appId: "1:1017607866300:web:3b45dee2d6d8087cb10db9",
  measurementId: "G-6JF9QVX0WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export default app;