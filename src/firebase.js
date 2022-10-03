import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0Tk7mIpi6ZBVyvXKJ6t33ojC9ghamXdA",
  authDomain: "facebookclone-e5cb8.firebaseapp.com",
  projectId: "facebookclone-e5cb8",
  storageBucket: "facebookclone-e5cb8.appspot.com",
  messagingSenderId: "893961709374",
  appId: "1:893961709374:web:2d0be6f0ec7ae989cfee6f",
  measurementId: "G-MXGT75GMZK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();


export { auth, authProvider };
export default db;