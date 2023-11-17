import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Config/firebase.confiq";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic ();
  
    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            
            if(currentUser) {
             // get token and store client 
            const userInfo = {email: currentUser.email }
            axiosPublic.post ('/jwt' , userInfo)
            .then (res => {
                if(res.data.token) {
                    localStorage.setItem ('access_token' , res.data.token);
                }
            })


            } else {
                //TODO : somethings
              localStorage.removeItem('access_token')
            }
           
            setLoading(false)
        })
        return () => {
            unSubsCribe();
        }

    }, [axiosPublic])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email , password ) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup (auth , googleProvider)
    }


    const logOut = () => {
        setLoading(true);
        return signOut (auth);
    }

    const updateUserProfile = (name , photo) => {
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })

    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile



    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;