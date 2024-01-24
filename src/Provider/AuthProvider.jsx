import { createContext, useEffect, useState,} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext= createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]=useState([]);
    const [loading, setLoading]= useState([]);
    const googleProvider= new GoogleAuthProvider();
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile=(name, photoUrl)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
       });
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
            if(currentUser){

            }
            else{
                
            }
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const authInfo={
       user,
       loading,
       createUser,
       signIn,
       googleSignIn,
       logOut, 
       updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;