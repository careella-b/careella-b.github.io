import { Routes, Route, Navigate } from "react-router-dom";

import {
    Homepage, PageNotFound, AccountPage, ProfilePage, LoginPage, BlogPage, EventsPage, ContactPage, TeamPage, CartPage,
    BlogPost, DemandsPage, MissionPage, AdminDashboard, ManageEventsPage, ManageBlogPage, ManageAccountsPage, EventPost, SignUpPage,
    AddBlogPost, EditBlogPost, AddAccount, EditAccount, AddEvent, EditEvent, CheckoutPage

} from "./components/index.js";
import { CartProvider } from "./CartContext.js";
import { UserProvider } from "./UserContext.js";
import { PublicLayout } from "./PublicLayout.js";
import { AdminLayout } from "./AdminLayout.js";

function App() {

    const user = {
        role: 'admin', // This should come from auth system
    };

    const isAuthorized = user && user.role === 'user';
    const isAdmin = user && user.role === 'admin';

    return (
        <div className="App">
            <CartProvider>
                <UserProvider>
                <Routes>
                    <Route index element={<PublicLayout><Homepage /></PublicLayout>} />
                    <Route path="*" element={<PublicLayout><PageNotFound /></PublicLayout>} />
                    <Route path="/blog" element={<PublicLayout><BlogPage /></PublicLayout>} />
                    <Route path="/blog/:id" element={<PublicLayout><BlogPost /></PublicLayout>} />
                    <Route path="/account" element={<PublicLayout><AccountPage /></PublicLayout>} />
                    <Route path="/profile" element={<PublicLayout><ProfilePage /></PublicLayout>} />
                    <Route path="/signup" element={<PublicLayout><SignUpPage /></PublicLayout>} />
                    <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
                    <Route path="/events" element={<PublicLayout><EventsPage /></PublicLayout>} />
                    <Route path="/event/:id" element={<PublicLayout><EventPost /></PublicLayout>} />
                    <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
                    <Route path="/about-us/team" element={<PublicLayout><TeamPage /></PublicLayout>} />
                    <Route path="/about-us/our-demands" element={<PublicLayout><DemandsPage /></PublicLayout>} />
                    <Route path="/about-us/mission-statement" element={<PublicLayout><MissionPage /></PublicLayout>} />
                    <Route path="/cart" element={<PublicLayout><CartPage /></PublicLayout>} />
                    <Route path="/cart/checkout" element={<PublicLayout><CheckoutPage /></PublicLayout>} />
                   
                    <Route path="/admin" element={isAdmin ? (<AdminLayout><AdminDashboard /></AdminLayout>) : (<Navigate to="/login" replace />)} />
                    <Route path="/admin/events" element={isAdmin ? (<AdminLayout><ManageEventsPage /></AdminLayout>) : (<Navigate to="/login" replace />)} />
                    <Route path="/admin/events/add" element={isAdmin ? (<AdminLayout><AddEvent /></AdminLayout>) : (<Navigate to="/login" replace />)} />
                    <Route path="/admin/events/edit/:id" element={isAdmin ? (<AdminLayout><EditEvent /></AdminLayout>) : (<Navigate to="/login" replace />)} />
                    <Route path="/admin/blog" element={isAdmin ? (<AdminLayout><ManageBlogPage /></AdminLayout>) : (<Navigate to="/login" replace />)} />
                    <Route path="/admin/blog/add" element={isAdmin ? (<AdminLayout><AddBlogPost /></AdminLayout>) : (<Navigate to="/login" replace />)} />
                    <Route path="/admin/blog/edit/:id" element={isAdmin ? (<AdminLayout><EditBlogPost /></AdminLayout>) : (<Navigate to="/login" replace />)} />
                    <Route path="/admin/accounts" element={isAdmin ? (<AdminLayout><ManageAccountsPage /></AdminLayout>) : (<Navigate to="/login" replace />)} />
                    <Route path="/admin/accounts/add" element={isAdmin ? (<AdminLayout><AddAccount /></AdminLayout>) : (<Navigate to="/login" replace />)} />
                    <Route path="/admin/accounts/edit/:id" element={isAdmin ? (<AdminLayout><EditAccount /></AdminLayout>) : (<Navigate to="/login" replace />)} />
                    </Routes>
                </UserProvider>
            </CartProvider>
        </div>
    );
}

export default App;
