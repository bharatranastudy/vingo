import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY || "AIzaSyDTooa6yTTWtVGrDPshBC5KfhkVjx4kpFw",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "messpro-46599.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "messpro-46599",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "messpro-46599.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "163313262561",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:163313262561:web:d1087f266b2b2ee8f9fca0",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-M51PBVD5E6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };