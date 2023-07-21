// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp_guc0RKTG5FH6VbePpFv5loxnsvr7Ag",
  authDomain: "realtor-clone-project-5931b.firebaseapp.com",
  projectId: "realtor-clone-project-5931b",
  storageBucket: "realtor-clone-project-5931b.appspot.com",
  messagingSenderId: "647352237464",
  appId: "1:647352237464:web:27c7db172580071bd8ffed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()