import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import SignUpForm from "../../components/LoginPage/SignUpForm/SignUpForm";
import SignInForm from "../../components/LoginPage/SignInForm/SignInForm";

import * as actionCreators from "../../store/actions/index";

class LoginPage extends Component {
  termsHandler = () => {
    alert("Just don't be a dick.");
  };

  validateEmail = () => {
    let validEmail = false
    const emailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
     if (emailRegex.test(this.props.userEmail) && (this.props.userEmail === this.props.emailConfirm)) {validEmail = true}
     return validEmail
  };

  validateUserName = () => {
    let validName = false
    if (this.props.userName.length > 6 ) {
      validName = true
    }
    return validName
  }

  validatePassword = () => {
    let validPassword = false
    if ((this.props.userPswd === this.props.pswdConfirm) && (this.props.userPswd.length > 8)) {
      validPassword = true
    }
    return validPassword
  }

  render() {
    let formView = <div></div>;
    let unsubmittable = true;
    if (this.validateEmail() && this.validateUserName() && this.validatePassword()) {
      unsubmittable = false;
    } else {
      unsubmittable = true;
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
      formView = <SignInForm />;
    }

    return (
      <div>
        <Button onClick={() => this.props.changeView("signIn")}>Sign in</Button>{" "}
        <Button onClick={() => this.props.changeView("signUp")}>
          {" "}
          Sign up
        </Button>
        <a href="/Home">Go to Home Page</a>
        {formView}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userEmail: state.lgn.email,
    emailConfirm: state.lgn.emailConfirm,
    userPswd: state.lgn.password,
    pswdConfirm: state.lgn.passwordConfirm,
    userName: state.lgn.userName,
    view: state.lgn.view
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
      dispatch(actionCreators.changePswdConfirm(passwordConfirm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
