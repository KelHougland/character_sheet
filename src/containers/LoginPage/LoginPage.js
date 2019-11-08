import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <a href="/Home">Go to Home Page</a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userEmail: state.email,
    userPswd: state.password
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
