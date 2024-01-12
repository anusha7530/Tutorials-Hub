import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


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

//database
const db = getDatabase(app);

document.getElementById("submit").addEventListener('click',function(e){
e.preventDefault();
    set(ref(db, 'user/'+ document.getElementById("fname").value),
    {
        fname: document.getElementById("fname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    });
})


//authentication
// const auth = getAuth(app);
