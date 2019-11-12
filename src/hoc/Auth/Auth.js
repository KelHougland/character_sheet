import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index"
import LoginPage from "../../containers/LoginPage/LoginPage";
import "../../App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

const auth = passedComponent => {
  return passedComponent;
};

const mapStateToProps = state => {
  return {
    authorizedUser: state.acct.authorizedUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authUser: () => dispatch(actionCreators.authUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(() => auth());
