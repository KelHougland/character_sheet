import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

import LoginPage from "./containers/LoginPage/LoginPage";
import Home from "./containers/Home/Home";
import Initiative from "./containers/Initiative/Initiative";

import "./App.css";

class App extends Component {
  render() {
    let switchContents = "";
    if (this.props.user) {
      switchContents = (
        <Switch>
          <Route path="/CombatTracker" component={Initiative} />
          <Route path="/" exact component={Home} />
        </Switch>
      );
    } else {
      switchContents = (
        <Switch>
          <Route path="/" exact component={LoginPage} />
        </Switch>
      );
    }

    return (
      <div className="App">
        <BrowserRouter>{switchContents}</BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authCheck: dispatch(actionCreators.authCheck())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
