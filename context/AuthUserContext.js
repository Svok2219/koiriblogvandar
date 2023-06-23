import { createContext, useContext, useEffect, useState ,} from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { auth } from '../lib/firebase'
import { router } from 'next/router';

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children
}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // const [openSignal , setOpenSignal] = useState("")
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL:user.photoURL
        })
      } else {
        setUser(null)
      }
      setLoading(false)
      // console.log(user,loading)

    })

    return () => unsubscribe()
  }, [])

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // const  setStateOS = (key) => {
  //   return setOpenSignal(key)
  // }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const Glogin = (auth, provider) => {

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log({ credential, token, user });
            router.back()
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log({ errorCode, errorMessage, email, credential });
            router.reload()
        });
};

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, Glogin }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}