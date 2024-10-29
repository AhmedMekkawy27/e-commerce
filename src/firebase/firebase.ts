
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDuwBvji7zLDHEX4LXOlje_ia1pPYxtewU",
  authDomain: "e-commerce-3d740.firebaseapp.com",
  projectId: "e-commerce-3d740",
  storageBucket: "e-commerce-3d740.appspot.com",
  messagingSenderId: "330165390048",
  appId: "1:330165390048:web:85cfe85bf0e19869c89e85",
  measurementId: "G-EXBMCMQ7N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
