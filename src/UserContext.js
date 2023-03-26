import { createContext, useState, useContext, useEffect } from 'react';
import { db } from './Firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [isAdmin, setisAdmin] = useState(false);

    useEffect(() => {
        console.log(user);
        if (user && user.email) {
            const fetchUserDetails = async () => {
                const usersRef = collection(db, "accounts");
                const q = query(usersRef, where("email", " == ", user.email));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    if (!querySnapshot.empty) {
                        const userData = querySnapshot.docs[0];
                        setUserDetails({ id: userData.id, ...userData.data() });
                        setisAdmin(userData.data().isAdmin);
                    } else {
                        console.log("No user found");
                    }
                });

                return () =>
                {
                    unsubscribe();
                };
            };

            fetchUserDetails();
        } else {
            setUserDetails(null);
            setisAdmin(false);
        }
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