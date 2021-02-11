import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState, useMemo } from "react";

import LoginScreen from "./components/LoginScreen";
import Home from "./components/Home";
import HandleRedirect from "./components/HandleRedirect";
import { UserContext } from "./components/UserContext";
import { useLocalStorage } from "./hooks/UseLocalStorage";

function App() {
  const [user, setUser] = useLocalStorage("currentUser", null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <Switch>
        <UserContext.Provider value={value}>
          <Route path="/" component={LoginScreen} exact />
          <Route path="/home" component={Home} />
          <Route path="/redirect" component={HandleRedirect} />
        </UserContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
