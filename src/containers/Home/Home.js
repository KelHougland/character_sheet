import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "semantic-ui-react";

import * as actionCreators from "../../store/actions/index";
import Initiative from "./../Initiative/Initiative";

class Home extends Component {
  render() {
    return (
      <div>
        <Initiative />
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
