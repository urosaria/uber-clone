import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrW4qmckFPZBkoTk9lLdYYaNkevvG998U",
  authDomain: "uber-next-clone-fd4a3.firebaseapp.com",
  projectId: "uber-next-clone-fd4a3",
  storageBucket: "uber-next-clone-fd4a3.appspot.com",
  messagingSenderId: "748243909451",
  appId: "1:748243909451:web:b8f9308abb37fab8f4c6ce",
  measurementId: "G-3DT1K0P3NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }