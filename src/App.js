import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState, useMemo } from "react";

import LoginScreen from "./components/LoginScreen";
import Home from "./components/Home";
import HandleRedirect from "./components/HandleRedirect";
import { UserContext } from "./components/UserContext";
import { useLocalStorage } from "./hooks/UseLocalStorage";
import { UserService } from "./proto/user_pb_service";
import { GetUserRequest, User } from "./proto/user_pb";
import { grpc } from "@improbable-eng/grpc-web";

function getUser() {
  const req = new GetUserRequest();
  req.setName("robert");
  grpc.unary(UserService.GetUser, {
    request: req,
    host: "http://localhost:8000",
    onEnd: (res) => {
      const { status, statusMessage, headers, message, trailers } = res;
      if (status === grpc.Code.OK && message) {
        console.log(message.toObject());
      }
    },
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
