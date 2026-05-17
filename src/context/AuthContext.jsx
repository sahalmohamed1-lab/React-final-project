/* eslint-disable */
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = async () => {
     const result = await signInWithPopup(auth, googleProvider);
     return result.user;
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signup, login, googleLogin, logout, isAuthenticated: !!user }} >
            {!loading && children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;