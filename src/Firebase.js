import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyCgRzx56aenLdfQCvPCWepYkX_fb7MbWW4",
    authDomain: "esane-a07c1.firebaseapp.com",
    projectId: "esane-a07c1",
    storageBucket: "esane-a07c1.appspot.com",
    messagingSenderId: "188259431399",
    appId: "1:188259431399:web:68517b4bd493c5e272c342",
    measurementId: "G-HNZEPRW20C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export firestore database
export const db = getFirestore(app);

