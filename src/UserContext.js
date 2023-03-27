import { createContext, useState, useContext, useEffect } from 'react';
import { db } from './Firebase';
import { onSnapshot, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [isAdmin, setisAdmin] = useState(false);
    

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (user && user.uid) {
                const userDocRef = doc(db, "accounts", user.uid);
                const docSnapshot = await getDoc(userDocRef);
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    setUserDetails({ id: docSnapshot.id, ...userData });
                    console.log(userData.admin_flag);
                    setisAdmin(userData.admin_flag);
                    console.log(userData);

                } else {
                    console.log("No user found");
                }
            }
        };
        fetchUserDetails(); 
        console.log(isAdmin);
        
        
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