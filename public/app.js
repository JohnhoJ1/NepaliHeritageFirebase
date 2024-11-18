import { db } from "../firebaseConfig.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {
  const dataContainer = document.getElementById("data-container");
  const querySnapshot = await getDocs(collection(db, "items"));

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const div = document.createElement("div");
    div.innerHTML = `<h2>${data.name}</h2><p>${data.description}</p>`;
    dataContainer.appendChild(div);
  });
});
