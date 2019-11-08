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
    charsInCombat: state.charactersInCombat,
    addCharacter: state.addChar
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
