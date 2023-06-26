import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBzAqboMqxDW6wHRswArMU15w3xIeekfCE",
    authDomain: "shop-online-db-bca38.firebaseapp.com",
    projectId: "shop-online-db-bca38",
    storageBucket: "shop-online-db-bca38.appspot.com",
    messagingSenderId: "546102450213",
    appId: "1:546102450213:web:ba732b163cdc27093c07cc"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  })

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup (auth, provider);



  export const db = getFirestore();

  export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) =>{
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    
    if(!userSnapShot.exists()){
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInfo
        })
      }catch(error){
        console.log(error.messsage, "error creating the user")
      }
    }
    
    return userDocRef;
  }

export const createAuthUserWithEmailAndPassword = async(email,password) =>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);  
} 
export const signInAuthUserWithEmailAndPassword = async(email,password) =>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);  
} 