import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import LoginScreen from "./components/LoginScreen";
import Home from "./components/Home";
import HandleRedirect from "./components/HandleRedirect";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={LoginScreen} exact />
        <Route path="/home" component={Home} />
        <Route path="/redirect" component={HandleRedirect} />
      </Switch>
    </div>
  );
}

export default App;
