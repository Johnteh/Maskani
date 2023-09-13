import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from 'react';
import {FcGoogle} from "react-icons/fc";
import { toast } from 'react-toastify';
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick(){
    try {

      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      //check if the user exists in the db
      const docRef = doc(db, "users", user.uid)

      //save the user in a docsnap if they exist
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()){
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),

        });

      }
      navigate("/")

      

      
    } catch (error) {
      toast.error("could not authorize with google")

      console.log(error)
    }

  }
  return (
    <button type="button" onClick={onGoogleClick}
    className='flex items-center justify-center
    w-full bg-red-700
    py-3 uppercase
    text-sm font-medium
    hover:bg-red-800
    active:bg-red-900
    shadow-md
    hover:shadow-lg
    transition duration-150
    ease-in-out rounded'>
        <FcGoogle className='text-2xl
        bg-white rounded-full mr-2'/>
        Continue with Google</button>
  )
}

export default OAuth