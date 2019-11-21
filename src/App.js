import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./containers/LoginPage/LoginPage";
import Home from "./containers/Home/Home";
import Initiative from "./containers/Initiative/Initiative";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/CombatTracker" component={Initiative} />
          <Route path="/Home" exact component={Home} />
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
