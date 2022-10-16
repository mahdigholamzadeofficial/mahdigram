import React from "react";
import { Route, Switch } from "react-router-dom";
import Chats from "./components/Chats";
import Login from "./components/Login";
import AuthContextProvider from "./contexts/AuthContextProvider";
const App = () => {
  return (
    <AuthContextProvider>
      <Switch>
        <Route path="/chats" component={Chats} />
        <Route path="/" component={Login} />
      </Switch>
    </AuthContextProvider>
  );
};

export default App;
