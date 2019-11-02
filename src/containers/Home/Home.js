import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";
import Initiative from "./../Initiative/Initiative";

class Home extends Component {
  state = {
    newChar: { name: "name", speed: "speed", initiative: "initiative" }
  };

  changeNameHandler = event => {
    let changedChar = {
      name: event.target.value,
      speed: this.state.newChar.speed,
      initiative: this.state.newChar.initiative
    };
    this.setState({ newChar: changedChar });
  };

  changeSpeedHandler = event => {
    let changedChar = {
      name: this.state.newChar.name,
      speed: event.target.value,
      initiative: this.state.newChar.initiative
    };
    this.setState({ newChar: changedChar });
  };

  changeInitHandler = event => {
    let changedChar = {
      name: this.state.newChar.name,
      speed: this.state.newChar.speed,
      initiative: event.target.value
    };
    this.setState({ newChar: changedChar });
  };

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

    let addCharForm = (
      <div>
        <input
          type="text"
          value={this.state.newChar.name}
          onChange={this.changeNameHandler}
        ></input>
        <input
          type="text"
          value={this.state.newChar.speed}
          onChange={this.changeSpeedHandler}
        ></input>
        <input
          type="text"
          value={this.state.newChar.initiative}
          onChange={this.changeInitHandler}
        ></input>
        <button onClick={() => this.props.addChar(this.state.newChar)}>
          Add Char
        </button>
      </div>
    );

    return (
      <div>
        {charView}
        <button onClick={this.props.initiativePass}>Next Turn</button>
        {addCharForm}
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
    initiativePass: () => dispatch(actionCreators.initiativePass()),
    speedIncrement: id => dispatch(actionCreators.speedIncrement(id)),
    speedDecrement: id => dispatch(actionCreators.speedDecrement(id)),
    initIncrement1: id => dispatch(actionCreators.initIncrement1(id)),
    initDecrement1: id => dispatch(actionCreators.initDecrement1(id)),
    initIncrement5: id => dispatch(actionCreators.initIncrement5(id)),
    initDecrement5: id => dispatch(actionCreators.initDecrement5(id)),
    initChange: (value, id) => dispatch(actionCreators.initChange(value, id)),
    addChar: character => dispatch(actionCreators.addChar(character)),
    delChar: id => dispatch(actionCreators.delChar(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
