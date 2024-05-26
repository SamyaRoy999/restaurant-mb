import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";




export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In User

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sing in

    const googleSingIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // user profile Update

    const updataProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // sing out 

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {

        const unsubcribe = onAuthStateChanged(auth, (creantUser) => {
            setUser(creantUser)
            console.log("get user", creantUser);
            setLoading(false)
        });
        return () => {
            return unsubcribe()
        }
    }, [])



    const allValue = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        updataProfile,
        googleSingIn,
        
        
    }

    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider