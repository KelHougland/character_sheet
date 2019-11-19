import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SignUpForm from "../../components/LoginPage/SignUpForm/SignUpForm";
import SignInForm from "../../components/LoginPage/SignInForm/SignInForm";

import * as actionCreators from "../../store/actions/index";

class LoginPage extends Component {
  termsHandler = () => {
    alert("Just don't be a dick.");
  };

  validateEmail = () => {
    let validEmail = false;
    const emailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    if (
      emailRegex.test(this.props.userEmail) &&
      this.props.userEmail === this.props.emailConfirm
    ) {
      validEmail = true;
    }
    return validEmail;
  };

  validateEmailLogin = () => {
    let validEmailLogin = false;
    const emailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    if (emailRegex.test(this.props.userEmail)) {
      validEmailLogin = true;
    }
    return validEmailLogin;
  };

  validateUserName = () => {
    let validName = false;
    if (this.props.userName.length > 5 && this.props.userName.length < 15) {
      validName = true;
    }
    return validName;
  };

  validatePassword = () => {
    let validPassword = false;
    if (
      this.props.userPswd === this.props.pswdConfirm &&
      this.props.userPswd.length > 8
    ) {
      validPassword = true;
    }
    return validPassword;
  };

  validatePasswordLogin = () => {
    let validPasswordLogin = false;
    if (this.props.userPswd.length > 8) {
      validPasswordLogin = true;
    }
    return validPasswordLogin;
  };

  render() {
    let formView = (
      <div>
        {" "}
        <Button onClick={() => this.props.changeView("signIn")}>
          Sign in
        </Button>{" "}
        <Button onClick={() => this.props.changeView("signUp")}>
          {" "}
          Sign up
        </Button>
      </div>
    );

    let unsubmittable = true;
    if (
      this.validateEmail() &&
      this.validateUserName() &&
      this.validatePassword() &&
      this.props.accepted
    ) {
      unsubmittable = false;
    } else {
      unsubmittable = true;
    }

    let notLoginAble = true;
    if (this.validateEmailLogin() && this.validatePasswordLogin()) {
      notLoginAble = false;
    }


    if (this.props.view === "signUp") {
      formView = (
        <SignUpForm
          terms={this.termsHandler}
          noSubmit={unsubmittable}
          propsToPass={this.props}
        />
      );
    } else if (this.props.view === "signIn") {
      formView = <SignInForm propsToPass={this.props} noLogin={notLoginAble} />;
    }

    return <div>{formView}       <a href="/CombatTracker">Initiate a Combat</a></div>;
  }
}

const mapStateToProps = state => {
  return {
    userEmail: state.lgn.email,
    emailConfirm: state.lgn.emailConfirm,
    userPswd: state.lgn.password,
    pswdConfirm: state.lgn.passwordConfirm,
    userName: state.lgn.userName,
    view: state.lgn.view,
    accepted: state.lgn.accepted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeView: newView => dispatch(actionCreators.changeView(newView)),
    changeEmail: newEmail => dispatch(actionCreators.changeEmail(newEmail)),
    changeEmailConfirm: emailConfirm =>
      dispatch(actionCreators.changeEmailConfirm(emailConfirm)),
    changeUserName: userName =>
      dispatch(actionCreators.changeUserName(userName)),
    changePassword: password =>
      dispatch(actionCreators.changePassword(password)),
    changePasswordConfirm: passwordConfirm =>
      dispatch(actionCreators.changePswdConfirm(passwordConfirm)),
    acceptTerms: () => dispatch(actionCreators.acceptTerms())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
