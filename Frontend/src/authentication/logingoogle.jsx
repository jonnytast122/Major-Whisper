import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";   

const firebaseConfig = {
  apiKey: "AIzaSyBbYpeC6uWLVSqKNFSFYCzHzdzg-5zSgQM",
  authDomain: "major-whisper-7a3fa.firebaseapp.com",
  projectId: "major-whisper-7a3fa",
  storageBucket: "major-whisper-7a3fa.appspot.com",
  messagingSenderId: "802993917587",
  appId: "1:802993917587:web:d44e4020b0554483bd0766",
  measurementId: "G-3M5PNNB0XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Corrected
const provider = new GoogleAuthProvider();
export { auth, provider };