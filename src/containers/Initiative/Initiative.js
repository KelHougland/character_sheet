import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";

import AddCharForm from "../../components/InitiativeTracker/AddCharInit/AddCharInit";
import TableContent from "../../components/InitiativeTracker/TableContent/TableContent";

class Initiative extends Component {
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
      !isNaN(Number(this.props.addCharacter.speed)) &&
      !isNaN(Number(this.props.addCharacter.initiative))
    ) {
      addDisabled = false;
      disabledText = null;
    }
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Speed</Table.HeaderCell>
              <Table.HeaderCell>Initiative</Table.HeaderCell>
              <Table.HeaderCell>Turns Taken</Table.HeaderCell>
              <Table.HeaderCell>Delete/Add</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <TableContent
            charList={this.props.charsInCombat}
            propsToPass={this.props}
          />
          {this.props.charForm}
          <AddCharForm
            charName={this.props.addCharacter.name}
            charSpeed={this.props.addCharacter.speed}
            charInit={this.props.addCharacter.initiative}
            changeName={this.props.changeAddCharName}
            changeSpeed={this.props.changeAddCharSpeed}
            changeInit={this.props.changeAddCharInit}
            addChar={this.props.addChar}
            charToAdd={this.props.addCharacter}
            addDisable={addDisabled}
          />
        </Table>

        <Button onClick={this.props.initiativePass}>Next Turn</Button>

        <br />
        {disabledText}
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
    initiativePass: () => dispatch(actionCreators.initiativePass()),
    speedIncrement: id => dispatch(actionCreators.speedIncrement(id)),
    speedDecrement: id => dispatch(actionCreators.speedDecrement(id)),
    initIncrement1: id => dispatch(actionCreators.initIncrement1(id)),
    initDecrement1: id => dispatch(actionCreators.initDecrement1(id)),
    initIncrement5: id => dispatch(actionCreators.initIncrement5(id)),
    initDecrement5: id => dispatch(actionCreators.initDecrement5(id)),
    delChar: id => dispatch(actionCreators.delChar(id)),
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
)(Initiative);
