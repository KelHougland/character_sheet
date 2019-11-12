import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./containers/LoginPage/LoginPage";
import Home from "./containers/Home/Home";
import Initiative from "./containers/Initiative/Initiative";

import "./App.css";


function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/CombatTracker" component={Initiative} />
        <Route path="/Home" exact component={Home} />
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
