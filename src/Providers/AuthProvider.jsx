import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const userNameUpdate = (user, userName,photoUrl) => {
    return updateProfile(user, {
      displayName: userName,
      photoURL:photoUrl,
    })
  };


  // ======= Google Login =======
  const provider = new GoogleAuthProvider();
  const googleLogin = ()=>{
    return signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  

  const userInfo = {
    user,
    createUser,
    userSignIn,
    logOut,
    userNameUpdate,
    googleLogin
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
