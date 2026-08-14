import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9KDmknkH0WMUCHK2XYedxVbkweuqqpxw",
  authDomain: "hermeziu-webgis.firebaseapp.com",
  projectId: "hermeziu-webgis",
  storageBucket: "hermeziu-webgis.firebasestorage.app",
  messagingSenderId: "467781255311",
  appId: "1:467781255311:web:69f6103a0ac92ff4a730fa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);