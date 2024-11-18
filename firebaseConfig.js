import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3ghOLZK5DvVVNGrjCkS1BZ79d27xqcos",
  authDomain: "nepaliheritage-81c6c.firebaseapp.com",
  projectId: "nepaliheritage-81c6c",
  storageBucket: "nepaliheritage-81c6c.firebasestorage.app",
  messagingSenderId: "180485397587",
  appId: "1:180485397587:web:48e272fcb1604766adfaa6",
  measurementId: "G-8Z16GEW6ZZ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
