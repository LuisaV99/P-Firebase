import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId:process.env.REACT_APP_FIREBASE_APPID,
    measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENTID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;