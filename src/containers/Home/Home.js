import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";
import Initiative from "./../Initiative/Initiative";

class Home extends Component {
  state = {
    newChar: {
      name: "name",
      speed: "speed",
      initiative: "initiative",
      type: "PC"
    }
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
    let charNames = this.props.chars.map(char => char.name.toLowerCase());
    charNames.push("");
    charNames.push("name");
    charNames.push("round");
    let addDisabled = true;
    let disabledText =
      "Please valid name, speed, and initiative to add a character";
    if (
      !charNames.includes(this.state.newChar.name.toLowerCase()) &&
      !isNaN(this.state.newChar.speed) &&
      !isNaN(this.state.newChar.initiative)
    ) {
      addDisabled = false;
      disabledText = null;
    }
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
        <button
          onClick={() => this.props.addChar(this.state.newChar)}
          disabled={addDisabled}
        >
          Add Char
        </button>
        <br />
        {disabledText}
      </div>
    );

    return (
      <div>
        {/* {charView} */}
        <Initiative />
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
    addChar: character => dispatch(actionCreators.addChar(character))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
