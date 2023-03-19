// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmHuCikVBU2p8yKFUtVojxJ-ogi1-kvlI",
  authDomain: "dragon-news-10642.firebaseapp.com",
  projectId: "dragon-news-10642",
  storageBucket: "dragon-news-10642.appspot.com",
  messagingSenderId: "1009890476463",
  appId: "1:1009890476463:web:ce13d267d07c5d9547ef5a",
  measurementId: "G-S7W6E7HKRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app ;