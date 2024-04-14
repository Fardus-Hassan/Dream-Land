import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA3QCrhnDpm21Q-NCa-Rbp_8X0aDDO5vo0",
  authDomain: "dream-land-17173.firebaseapp.com",
  projectId: "dream-land-17173",
  storageBucket: "dream-land-17173.appspot.com",
  messagingSenderId: "992755409042",
  appId: "1:992755409042:web:89339cf7eff8a4261bc64b"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
