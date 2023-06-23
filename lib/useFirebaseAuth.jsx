import { useState, useEffect } from 'react'
import firebase from './firebase';
import { getAuth,onAuthStateChanged, signInWithEmailAndPassword ,createUserWithEmailAndPassword,GoogleAuthProvider,signOut } from "firebase/auth";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false)
      return;
    }

    setLoading(true)

    var formattedUser = formatAuthUser(authState);

    setAuthUser(formattedUser);

    setLoading(false);

  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(email, password)
    ;

  const signOut = () =>
    signOut().then(clear);

  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
  //   return () => unsubscribe();
  // }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
  };
}