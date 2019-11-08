import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import SignUpForm from "../../components/LoginPage/SignUpForm/SignUpForm";
import SignInForm from "../../components/LoginPage/SignInForm/SignInForm";

import * as actionCreators from "../../store/actions/index";

class LoginPage extends Component {
  state = { view: "initial" };
  signUpHandler = () => {
    this.setState({ view: "signUp" });
  };
  signInHandler = () => {
    this.setState({ view: "signIn" });
  };
  render() {
    let formView = <div></div>;
    if (this.state.view === "signUp") {
      formView = <SignUpForm />;
    } else if (this.state.view === "signIn") {
      formView = <SignInForm />;
    }

    return (
      <div>
        <Button onClick={this.signInHandler}>Sign in</Button>{" "}
        <Button onClick={this.signUpHandler}> Sign up</Button>
        <a href="/Home">Go to Home Page</a>
        {formView}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userEmail: state.lgn.email,
    userPswd: state.lgn.password,
    userName: state.lgn.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
