
//all commented out for now bc funky stuff is happening
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzaMQMUCSUCFcDaibELzpcpit1YVWrFD4",
    authDomain: "pawsitive-31d7f.firebaseapp.com",
    projectId: "pawsitive-31d7f",
    storageBucket: "pawsitive-31d7f.appspot.com",
    messagingSenderId: "795368018677",
    appId: "1:795368018677:web:29fd3842dae81933c36bbc",
    measurementId: "G-DJLVL25KKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const provider = new GoogleAuthProvider();

const auth = getAuth();
signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });


