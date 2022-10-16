import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import styles from "./Chats.module.css";
import axios from "axios";
import { auth } from "../Firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
//context
import { AuthContext } from "../contexts/AuthContextProvider";
const Chats = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const user = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "d15f9ae5-3b39-4d33-8ffd-0f2d6220406c",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "04987911-a28d-4896-89e6-f3f5469c3099",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  if (!user || loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="d15f9ae5-3b39-4d33-8ffd-0f2d6220406c"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
