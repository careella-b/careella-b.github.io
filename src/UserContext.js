import { createContext, useState, useContext, useEffect } from 'react';
import { db } from './Firebase';
import { onSnapshot, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [isAdmin, setisAdmin] = useState(false);

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (user && user.email) {
                const userDocRef = doc(db, "accounts", user.email);
                const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
                    if (docSnapshot.exists()) {
                        const userData = docSnapshot.data();
                        setUserDetails({ id: docSnapshot.id, ...userData });
                        setisAdmin(userData.isAdmin);
                    } else {
                        console.log("No user found");
                    }
                });

                return () => {
                    unsubscribe();
                };
            }
            fetchUserDetails();
        };
    }, [user]);


    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser({
                    email: firebaseUser.email,
                    uid: firebaseUser.uid,
                });
            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const loginUser = (userData) => {
        setUser(userData);
    };

    const logoutUser = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, userDetails, isAdmin, loginUser, logoutUser }}>
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

export default UserProvider;