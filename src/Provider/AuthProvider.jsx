import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext=createContext()
const auth=getAuth(app)

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth,currentUser =>{

      setUser(currentUser)
      
      console.log("current user",currentUser)
      if(currentUser){
        const userInfo={email:currentUser.email}
        axios.post('http://localhost:5000/api/jwt',userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token)
            setLoading(false)
          }
        })
      }
      else{
        localStorage.removeItem('access-token')
        setLoading(false)
      }
      setLoading(false)
    })
    return ()=>{
      return unsubscribe()
    }
  },[])

  const authInfo={
    user,
    loading,
    createUser,
    signIn,
    logOut,

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;