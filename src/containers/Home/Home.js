import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "semantic-ui-react";

import * as actionCreators from "../../store/actions/index";
import Initiative from "./../Initiative/Initiative";

class Home extends Component {
  render() {
    let charNames = this.props.charsInCombat.map(char =>
      char.name.toLowerCase()
    );
    charNames.push("");
    charNames.push("name");
    charNames.push("round");
    let addDisabled = true;
    let disabledText =
      "Please valid name, speed, and initiative to add a character";
    if (
      !charNames.includes(this.props.addCharacter.name.toLowerCase()) &&
      !isNaN(this.props.addCharacter.speed) &&
      !isNaN(this.props.addCharacter.initiative)
    ) {
      addDisabled = false;
      disabledText = null;
    }
    let addCharForm = (
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>
            <input
              type="text"
              value={this.props.addCharacter.name}
              onChange={event =>
                this.props.changeAddCharName(event.target.value)
              }
            ></input>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <input
              type="text"
              value={this.props.addCharacter.speed}
              onChange={event =>
                this.props.changeAddCharSpeed(event.target.value)
              }
            ></input>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <input
              type="text"
              value={this.props.addCharacter.initiative}
              onChange={event =>
                this.props.changeAddCharInit(event.target.value)
              }
            ></input>
          </Table.HeaderCell>
          <Table.HeaderCell>0</Table.HeaderCell>
          <Table.HeaderCell>
            <Button
              onClick={() => this.props.addChar(this.props.addCharacter)}
              disabled={addDisabled}
            >
              +
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    );

    return (
      <div>
        <Initiative charForm={addCharForm} bottomText={disabledText} />
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
  return {
    addChar: character => dispatch(actionCreators.addChar(character)),
    changeAddCharName: newName =>
      dispatch(actionCreators.changeAddCharName(newName)),
    changeAddCharSpeed: newSpeed =>
      dispatch(actionCreators.changeAddCharSpeed(newSpeed)),
    changeAddCharInit: newInit =>
      dispatch(actionCreators.changeAddCharInit(newInit))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
