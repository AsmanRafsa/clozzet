// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMqLwkKKj9PNHyQXAx1ESYhc8odw37l3o",
  authDomain: "clozzet-16365.firebaseapp.com",
  projectId: "clozzet-16365",
  storageBucket: "clozzet-16365.appspot.com",
  messagingSenderId: "309821785517",
  appId: "1:309821785517:web:4faf44c764ee510ed58d24",
  measurementId: "G-9Y6PWT6J97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);
