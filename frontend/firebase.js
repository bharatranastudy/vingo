import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTooa6yTTWtVGrDPshBC5KfhkVjx4kpFw",
  authDomain: "messpro-46599.firebaseapp.com",
  projectId: "messpro-46599",
  storageBucket: "messpro-46599.firebasestorage.app",
  messagingSenderId: "163313262561",
  appId: "1:163313262561:web:d1087f266b2b2ee8f9fca0",
  measurementId: "G-M51PBVD5E6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };