import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { connect } from "react-redux";
//import { Redirect } from "react-router-dom";
import SignUpForm from "../../components/LoginPage/SignUpForm/SignUpForm";
import SignInForm from "../../components/LoginPage/SignInForm/SignInForm";

import * as actionCreators from "../../store/actions/index";

class LoginPage extends Component {
  state = {
    controls: {
      email: {
        value: "",
        elementConfig: {
          type: "email",
          placeholder: "Email Address",
          restriction: "Valid Email Address"
        },
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        signIn: true
      },
      emailConfirm: {
        value: "",
        elementConfig: {
          type: "email",
          placeholder: "Confirm Email",
          restriction: "Must Match Email Above"
        },
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        signIn: false
      },
      userName: {
        value: "",
        elementConfig: {
          type: "text",
          placeholder: "User Name",
          restriction: "Minimum 6 Characters Long"
        },
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        signIn: false
      },
      password: {
        value: "",
        elementConfig: {
          type: "password",
          placeholder: "Password",
          restriction: "Minimum 8 Characters Long"
        },
        validation: {
          required: true,
          minLength: 8
        },
        valid: false,
        signIn: true
      },
      passwordConfirm: {
        value: "",
        elementConfig: {
          type: "password",
          placeholder: "Confirm Password",
          restriction: "Must Match Password Above"
        },
        validation: {
          required: true,
          minLength: 8
        },
        valid: false,
        signin: false
      }
    },
    accepted: false,
    view: "initial"
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.controls.userName.value,
      this.state.view
    );
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        )
      }
    };
    this.setState({ controls: updatedControls });
  };

  termsHandler = () => {
    alert("Just don't be a dick.");
  };

  termsAcceptedHandler = () => {
    let prevState = this.state;
    let newValue = !this.state.accepted;
    return this.setState({ ...prevState, accepted: newValue });
  };

  changeViewHandler = view => {
    let prevState = this.state;
    return this.setState({ ...prevState, view: view });
  };

  render() {
    const formElementsArray = [];
    if (this.state.view === "signUp") {
      for (let key in this.state.controls) {
        formElementsArray.push({
          id: key,
          config: this.state.controls[key]
        });
      }
    } else if (this.state.view === "signIn") {
      for (let key in this.state.controls) {
        if (this.state.controls[key].signIn) {
          formElementsArray.push({
            id: key,
            config: this.state.controls[key]
          });
        }
      }
    }
    let formContent = formElementsArray.map(formElement => {
      return (
        <Form.Field key={formElement.id}>
          <label>{formElement.config.elementConfig.restriction}:</label>
          <Input
            type={formElement.config.elementConfig.type}
            value={formElement.config.value}
            placeholder={formElement.config.elementConfig.placeholder}
            onChange={event => this.inputChangedHandler(event, formElement.id)}
          />
        </Form.Field>
      );
    });

    let signIn = (
      <Button onClick={() => this.changeViewHandler("signIn")}>Sign in</Button>
    );

    let signUp = (
      <Button onClick={() => this.changeViewHandler("signUp")}> Sign up</Button>
    );

    let noLogin = true;
    if (this.state.controls.email.valid && this.state.controls.password.valid) {
      noLogin = false;
    }

    let noSubmit = true;
    if (
      this.state.controls.email.valid &&
      this.state.controls.emailConfirm.valid &&
      this.state.controls.userName.valid &&
      this.state.controls.password.valid &&
      this.state.controls.passwordConfirm.valid &&
      this.state.accepted
    ) {
      noSubmit = false;
    }

    if (this.state.view === "signUp") {
      signUp = (
        <SignUpForm
          terms={this.termsHandler}
          noSubmit={noSubmit}
          body={formContent}
          onAccept={this.termsAcceptedHandler}
          onSub={this.submitHandler}
        />
      );
    } else if (this.state.view === "signIn") {
      signIn = (
        <SignInForm
          body={formContent}
          noLogin={noLogin}
          onSub={this.submitHandler}
        />
      );
    }

    let formView = (
      <div>
        {signUp} {signIn}
      </div>
    );

    return (
      <div>
        {formView}
        <h3>{this.props.error ? this.props.error : null}</h3>{" "}
        <h1>Login to Access</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { error: state.auth.error };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, userName, view) =>
      dispatch(actionCreators.auth(email, password, userName, view))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
