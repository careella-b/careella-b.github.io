import { createContext, useState, useContext, useEffect } from 'react';
import { db } from './Firebase';
import { doc, getDoc } from "firebase/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState('');


    const loginUser = (userData) => {
        setUser(userData);
    };

    const logoutUser = () => {
        setUser(null);
    };

    const getUserDetails = async (email) => {
        const querySnapshot = await getDoc(doc(db, "users", email));
        if (querySnapshot.exists()) {
            setUserDetails({ id: querySnapshot.id, ...querySnapshot.data() });
        }
    };

    return (
        <UserContext.Provider value={{ user, userDetails, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }

    return context;
};

export default UserProvider ;
