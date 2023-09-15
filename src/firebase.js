// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA193EF5DYgpmxxwsM5OTpuocIgD-o7PXU",
  authDomain: "realtor-clone-react-c0322.firebaseapp.com",
  projectId: "realtor-clone-react-c0322",
  storageBucket: "realtor-clone-react-c0322.appspot.com",
  messagingSenderId: "31571507085",
  appId: "1:31571507085:web:9a039e93b84774af206fc4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
