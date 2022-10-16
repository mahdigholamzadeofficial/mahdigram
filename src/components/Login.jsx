import React from "react";
import googleLogo from "../assets/google.svg.webp";
import styles from "./login.module.css";
///firebase
import firebase from "firebase/app";
import { auth } from "../Firebase";
const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome to mahdigram</h2>
        <div
          className={styles.button}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <div className={styles.image}>
            <img src={googleLogo} alt="" />
          </div>
          <p> Sign in with google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
