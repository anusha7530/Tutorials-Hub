import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyAegVY8rtow9CW5WLhuBY0kfuaL1JZUAvw",
  authDomain: "tutorialshub-a7e29.firebaseapp.com",
  projectId: "tutorialshub-a7e29",
  storageBucket: "tutorialshub-a7e29.appspot.com",
  messagingSenderId: "947434084161",
  appId: "1:947434084161:web:8f1236e4b2fea7c22973c0",
  measurementId: "G-DH02M1WKNL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db1 = getDatabase(app);
const auth = getAuth(app);


//authentication
const email = document.querySelector("#email");
const npassword = document.querySelector("#new-password");

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit',(e) => {
e.preventDefault();

  const signUpEmail = email.value;
  const signUpPass = npassword.value;
  
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPass)
  .then((cred) => {
    toggle1();
    signupForm.reset()
  })
  .catch((err)=>{
    toggle2();
  })
  
  set(ref(db1, 'SignUpUsers/'+ document.getElementById("first-name").value),
    {
      username: document.getElementById("first-name").value,
      email: document.getElementById("email").value,
      pefrences: document.getElementById("referrer").value,
      bio: document.getElementById("bio").value, 
    });
})

