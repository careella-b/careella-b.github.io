import { Routes, Route } from "react-router-dom";
import { Homepage, PageNotFound, Footer, Header, BlogPage } from "./components/index.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

function App() {
  return (
      <div className="App">
          <Header />
          
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/blog" element={<BlogPage />} />
          </Routes>
          <Footer />
             
      </div>
  );
}

export default App;
