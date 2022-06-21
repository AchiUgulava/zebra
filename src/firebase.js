import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc,addDoc,collection, } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjdJBP0dUYYCMUVPnQxjY9t1yKjOhXkeg",
  authDomain: "fashion-store-fb84a.firebaseapp.com",
  projectId: "fashion-store-fb84a",
  storageBucket: "fashion-store-fb84a.appspot.com",
  messagingSenderId: "569815347021",
  appId: "1:569815347021:web:bb325b8ef7d2e84bfb9104",
  measurementId: "G-J8QQK8QE0E",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
export const db = getFirestore();

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
  return user;
};

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const registerWithEmailAndPassword = async ( email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};

export const signOutUser = () => signOut(auth);
