import { Routes, Route } from "react-router-dom";
import {
    Homepage, PageNotFound, AccountPage, ProfilePage, LoginPage, BlogPage, EventsPage, ContactPage, TeamPage, CartPage,
    DemandsPage, MissionPage, 
    Footer, Header, ScrollUpButton,
    LunarNewYear
} from "./components/index.js";


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
              <Route path="/account" element={<AccountPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about-us/team" element={<TeamPage />} />
              <Route path="/about-us/our-demands" element={<DemandsPage />} />
              <Route path="/about-us/mission-statement" element={<MissionPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/events/lunar-new-year-2023" element={<LunarNewYear />} />
          </Routes>
          <ScrollUpButton />
          <Footer />
             
      </div>
  );
}

export default App;
