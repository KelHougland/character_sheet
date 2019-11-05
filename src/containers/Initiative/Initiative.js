import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";

class Initiative extends Component {
  render() {
    let charView = this.props.chars
      .sort((a, b) => (a.initiative < b.initiative ? 1 : -1))
      .map(character => (
        <p>
          Name: {character.name} | Speed:{" "}
          {character.speed + character.speedBonus}
          <button onClick={() => this.props.speedIncrement(character.id)}>
            +1
          </button>
          <button onClick={() => this.props.speedDecrement(character.id)}>
            -1
          </button>{" "}
          | Initiative: {character.initiative}{" "}
          <button onClick={() => this.props.initIncrement1(character.id)}>
            +1
          </button>{" "}
          <button onClick={() => this.props.initDecrement1(character.id)}>
            -1
          </button>{" "}
          <button onClick={() => this.props.initIncrement5(character.id)}>
            +5
          </button>{" "}
          <button onClick={() => this.props.initDecrement5(character.id)}>
            -5
          </button>
          | Turns Taken: {character.turnCount}
          <button onClick={() => this.props.delChar(character.id)}>
            Delete
          </button>
          <br />
        </p>
      ));
    return (
      <div>
        {charView}{" "}
        <button onClick={this.props.initiativePass}>Next Turn</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.characters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initiativePass: () => dispatch(actionCreators.initiativePass()),
    speedIncrement: id => dispatch(actionCreators.speedIncrement(id)),
    speedDecrement: id => dispatch(actionCreators.speedDecrement(id)),
    initIncrement1: id => dispatch(actionCreators.initIncrement1(id)),
    initDecrement1: id => dispatch(actionCreators.initDecrement1(id)),
    initIncrement5: id => dispatch(actionCreators.initIncrement5(id)),
    initDecrement5: id => dispatch(actionCreators.initDecrement5(id)),
    initChange: (value, id) => dispatch(actionCreators.initChange(value, id)),
    delChar: id => dispatch(actionCreators.delChar(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Initiative);
