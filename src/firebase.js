import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDURHQ8sSHbwNHo07ljvkYnZoF-4Qd_jQ",

  authDomain: "react-2022-9f431.firebaseapp.com",

  projectId: "react-2022-9f431",

  storageBucket: "react-2022-9f431.appspot.com",

  messagingSenderId: "877681258898",

  appId: "1:877681258898:web:20da72f24ae6f1b1b1d14b",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
