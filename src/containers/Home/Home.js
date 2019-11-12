import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <a href="/CombatTracker">Initiate a Combat</a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    charsInCombat: state.cmbt.charactersInCombat,
    addCharacter: state.cmbt.addChar,
    authorizedUser: state.acct.authorizedUser
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
