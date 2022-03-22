import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB6f82Gi7DMNraVDvCdDOnFQbgYWf8bYyI",
    authDomain: "cardx-f1ef8.firebaseapp.com",
    projectId: "cardx-f1ef8",
    storageBucket: "cardx-f1ef8.appspot.com",
    messagingSenderId: "864175245067",
    appId: "1:864175245067:web:e5a1a963dacd17a71d840e",
    measurementId: "G-2DPTJXBET1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);