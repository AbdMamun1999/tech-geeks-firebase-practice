import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHzZ0rf-RG1hihlndwHLzD9aS6VkPvRN4",
  authDomain: "tect-geeks-practice.firebaseapp.com",
  projectId: "tect-geeks-practice",
  storageBucket: "tect-geeks-practice.appspot.com",
  messagingSenderId: "39808812403",
  appId: "1:39808812403:web:9adbc87fedc7eb511ab106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;