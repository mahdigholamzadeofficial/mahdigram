import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../Firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((item) => {
      setUser(item);
      setLoading(false);
      user && history.push("/chats");
    });
  }, [user, history]);
  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
