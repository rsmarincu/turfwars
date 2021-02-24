import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState, useMemo } from "react";

import LoginScreen from "./components/LoginScreen";
import Home from "./components/Home";
import HandleRedirect from "./components/HandleRedirect";
import { UserContext } from "./components/UserContext";
import { useLocalStorage } from "./hooks/UseLocalStorage";
import { UserServiceClient } from "./proto/user_pb_service";
import { GetUserRequest } from "./proto/user_pb";

function App() {
  const [user, setUser] = useLocalStorage("currentUser", null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const client = new UserServiceClient("https://localhost:50051");
  const req = new GetUserRequest();
  req.setName("robert");
  client.getUser(req, null, (err, user) => {
    console.log(user);
  });

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
