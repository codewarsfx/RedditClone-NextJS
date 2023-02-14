// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIcxtf9mBI_myQq8isRSM3FgWbkxkaSnY",
  authDomain: "reddit-clone-d401c.firebaseapp.com",
  projectId: "reddit-clone-d401c",
  storageBucket: "reddit-clone-d401c.appspot.com",
  messagingSenderId: "676338325993",
  appId: "1:676338325993:web:b6f7798d67f8704c7a5378"
};
// Initialize Firebase for SSR
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);


