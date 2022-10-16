import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDKxSImV2zFAs0NNszYc2Xc_dvGp0aUlKo",
    authDomain: "mahdigram-8af6d.firebaseapp.com",
    projectId: "mahdigram-8af6d",
    storageBucket: "mahdigram-8af6d.appspot.com",
    messagingSenderId: "996758742897",
    appId: "1:996758742897:web:a4f36f101cf2658ce5f8d0",
  })
  .auth();