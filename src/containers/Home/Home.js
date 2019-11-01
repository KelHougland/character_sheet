import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";
import Initiative from "./../Initiative/Initiative";

class Home extends Component {
  render() {
    let charView = this.props.chars.map(character => (
      <p>
        Name: {character.name} | Speed: {character.speed} | Initiative:{" "}
        {character.initiative} | Turns Taken: {character.turnCount}
      </p>
    ));

    return (
      <div>
        {charView}
        <button onClick={this.props.initiativePass}>Next Turn</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.characters,
    view: state.view
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initiativePass: () => dispatch(actionCreators.initiativePass())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
