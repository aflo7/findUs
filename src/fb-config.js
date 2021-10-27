import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyCouTpC4RMrUE9p0F1AO7ZBK9VMkZYBDAg",
  authDomain: "find-c16c7.firebaseapp.com",
  projectId: "find-c16c7",
  storageBucket: "find-c16c7.appspot.com",
  messagingSenderId: "254703647386",
  appId: "1:254703647386:web:0afcae0b99bcf7a5c2fd23"
});

export const db = getFirestore()