import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { useState, useMemo } from "react";
import { UserContext } from "./components/UserContext";
import { useLocalStorage } from "./hooks/UseLocalStorage";
import { UserServiceClient } from "./proto/user_pb_service";
import { GetUserRequest } from "./proto/user_pb";

import LoginScreen from "./components/LoginScreen";
import Home from "./components/Home";
import HandleRedirect from "./components/HandleRedirect";

function getUser() {
  var client = new UserServiceClient("http://localhost:8000");
  var getUserRequest = new GetUserRequest();
  getUserRequest.setName("Robert");
  client.getUser(getUserRequest, null, function (err, res) {
    var user = res.toObject();
    console.log(user);
  });
}

function App() {
  const [user, setUser] = useLocalStorage("currentUser", null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  getUser();

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
