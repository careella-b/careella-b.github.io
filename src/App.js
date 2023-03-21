import { Routes, Route } from "react-router-dom";
import {
    Homepage, PageNotFound, AccountPage, ProfilePage, LoginPage, BlogPage, EventsPage, ContactPage, TeamPage, CartPage,
    BlogPost, DemandsPage, MissionPage, 
    Footer, Header, ScrollUpButton, EventPost, SignUpPage

} from "./components/index.js";
import { CartProvider } from "./CartContext.js";

function App() {
  return (
      <div className="App">
          <Header />
          
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/event/:id" element={<EventPost />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about-us/team" element={<TeamPage />} />
              <Route path="/about-us/our-demands" element={<DemandsPage />} />
              <Route path="/about-us/mission-statement" element={<MissionPage />} />
              <Route path="/cart" element={<CartPage />} />
          </Routes>
          <ScrollUpButton />
          <Footer />
      </div>
  );
}

export default App;
