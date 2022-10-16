import React from "react";
import styles from "./Navbar.module.css";
const Navbar = ({ logoutHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Mahdigram</div>
      <div onClick={()=>logoutHandler()} className={styles.logout}>Logout</div>
    </div>
  );
};

export default Navbar;
