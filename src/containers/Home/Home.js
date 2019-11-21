import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import * as actionCreators from "../../store/actions/index";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.user.displayName}!</h1>
        <h3>
          <a href="/CombatTracker">Initiate a Combat</a>
        </h3>
        <p>
          <Button onClick={this.props.signOut}>Sign Out</Button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    charsInCombat: state.cmbt.charactersInCombat,
    addCharacter: state.cmbt.addChar,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return { signOut: () => dispatch(actionCreators.authSignout()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
