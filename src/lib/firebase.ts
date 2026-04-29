import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCteF496i_aTg7QI2cNrAifvVSDPH7tmCs",
  authDomain: "soniccora-b12d6.firebaseapp.com",
  projectId: "soniccora-b12d6",
  storageBucket: "soniccora-b12d6.firebasestorage.app",
  messagingSenderId: "668978467766",
  appId: "1:668978467766:web:cc35ed4903eae7d9b2e717",
  measurementId: "G-CJPWXK9JFE"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Analytics (optional, only in browser)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
  
  // Ensure persistence is set
  setPersistence(auth, browserLocalPersistence).catch(console.error);
}

export { app, auth, googleProvider, analytics };
