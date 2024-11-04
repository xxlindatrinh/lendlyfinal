import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJEgIGTv0LKmb_YcdTbCGU9l0eV1thEoM",
    authDomain: "lendly-a76c6.firebaseapp.com",
    databaseURL: "https://lendly-a76c6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lendly-a76c6",
    storageBucket: "lendly-a76c6.appspot.com",
    messagingSenderId: "529416789891",
    appId: "1:529416789891:web:d84f9f660cbbfc22aa20b6",
    measurementId: "G-ZLERVD5JKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };
