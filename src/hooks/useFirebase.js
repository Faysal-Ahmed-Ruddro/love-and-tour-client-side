import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuhentication from "../Firebase/FIrebase.init";

initializeAuhentication();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [isLoading,setIsLoading] = useState(true);
  console.log(user);
  const [error,setError] = useState();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

//   google sign in 
  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      
  };
//   on auth state 
  useEffect(()=>{
    setIsLoading(true)
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setError("")
        }
        setIsLoading(false)
      });
  },[])
//   signOut
const logOut = ()=>{
    
const auth = getAuth();
signOut(auth)
  .then(() => {
    setUser({})
  })
  .finally(()=> setIsLoading(false))
}
  return { user, error, signInWithGoogle, logOut, isLoading, setIsLoading };
};
export default useFirebase;
