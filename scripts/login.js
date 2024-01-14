import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAegVY8rtow9CW5WLhuBY0kfuaL1JZUAvw",
  authDomain: "tutorialshub-a7e29.firebaseapp.com",
  projectId: "tutorialshub-a7e29",
  storageBucket: "tutorialshub-a7e29.appspot.com",
  messagingSenderId: "947434084161",
  appId: "1:947434084161:web:8f1236e4b2fea7c22973c0",
  measurementId: "G-DH02M1WKNL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//authentication
const auth = getAuth(app);

const loginEmail = document.querySelector("#login-email");
const password = document.querySelector("#password");
const loginForm = document.querySelector("#login-form");
const loginBtn = document.querySelector("#login-btn");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const signInEmail = loginEmail.value;
  const signInPass = password.value;

  signInWithEmailAndPassword(auth, signInEmail, signInPass)
    .then((cred) => {
      toggle1();
      const dbRef = ref(getDatabase());
      var userId = document.getElementById("first-name").value;
      get(child(dbRef, `SignUpUsers/${userId}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            if (typeof snapshot.val() !== "undefined") {
              const username = snapshot.val().username;
              var use = document.createTextNode(username);
              const email = document.createTextNode(snapshot.val().email);
              const preferences = document.createTextNode(
                snapshot.val().preferences
              );
              const bio = document.createTextNode(snapshot.val().bio);
              const uid = document.createTextNode(auth.currentUser.uid);

              document.getElementById("user").appendChild(use);
              document.getElementById("user_bio").appendChild(bio);
              document.getElementById("user_email").appendChild(email);
              document
                .getElementById("user_prefrences")
                .appendChild(preferences);
              document.getElementById("user_uid").appendChild(uid);
            }
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      loginForm.reset();
    })
    .catch((err) => {
      errorAlert();
      console.log(err.message);
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
  } else {
  }
});

const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      toggle1();
    })
    .catch((err) => {
      alert(err.message);
    });
});
