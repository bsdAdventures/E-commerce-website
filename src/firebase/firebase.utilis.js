import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDuuuDO1gChL0p5kEKu6aTUpVY0jPwPm0g",
  authDomain: "e-commerce-app-3a7e7.firebaseapp.com",
  databaseURL: "https://e-commerce-app-3a7e7.firebaseio.com",
  projectId: "e-commerce-app-3a7e7",
  storageBucket: "e-commerce-app-3a7e7.appspot.com",
  messagingSenderId: "560150319352",
  appId: "1:560150319352:web:52a3aee25e73cd57f96b0d",
  measurementId: "G-BTTY1QFD38"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
