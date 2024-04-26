// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCr2216CN2-dKW5eW2uX9PwYC7VDdrgJJE",

  authDomain: "entregacoder-3e9d0.firebaseapp.com",

  projectId: "entregacoder-3e9d0",

  storageBucket: "entregacoder-3e9d0.appspot.com",

  messagingSenderId: "567862891611",

  appId: "1:567862891611:web:6fa909806955e6edccdb7e"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)