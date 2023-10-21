/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Component/Firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logout = () => {
        setLoading(false);
        return signOut(auth)
    }

    useEffect( () => {
        const unSubscribe=  onAuthStateChanged(auth, currentUser => {
            console.log("Current user", currentUser);
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unSubscribe();
        } 
    }, [])

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const userInfo = {
        user,
        setUser,
        signUp,
        signIn,
        loading,
        logout,
        googleSignUp

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>

    )
}