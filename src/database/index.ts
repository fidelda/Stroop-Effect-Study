import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import type { UserData } from "@/interface";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log(firebaseConfig)

export function uploadUserData(userId: string, userData: UserData) {
  set(ref(db, 'users/' + userId), userData);
}