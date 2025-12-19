import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgHyCDGHvq2Nw-qs3yK3qJ6BkJfGjN8yo",
  authDomain: "silambam-tournament.firebaseapp.com",
  projectId: "silambam-tournament",
  storageBucket: "silambam-tournament.firebasestorage.app",
  messagingSenderId: "501808749466",
  appId: "1:501808749466:web:671343fa1ef65b90cef823"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
