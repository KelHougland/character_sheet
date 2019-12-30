import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";

import AddCharForm from "../../components/InitiativeTracker/AddCharInit/AddCharInit";
import TableContent from "../../components/InitiativeTracker/TableContent/TableContent";

import "./Initiative.css";

class Initiative extends Component {
  state = {
    column: null,
    data: null,
    direction: null
  };

  sortHandler = clickedColumn => () => {
    const column = this.state.column;
    const direction = this.state.direction;
    const data = this.props.charsInCombat;
    if (column !== clickedColumn) {
      let newData = [];
      if (clickedColumn === "name") {
        newData = this.props.charsInCombat.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        );
      } else {
        newData = this.props.charsInCombat.sort((a, b) =>
          a[clickedColumn] < b[clickedColumn] ? -1 : 1
        );
      }

      this.setState({
        column: clickedColumn,
        data: newData,
        direction: "ascending"
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

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
      !isNaN(Number(this.props.addCharacter.speedBonus)) &&
      !isNaN(Number(this.props.addCharacter.initiative))
    ) {
      addDisabled = false;
      disabledText = null;
    }

    const column = this.state.column;
    const direction = this.state.direction;

    return (
      <div className="combatTableDiv">
        <Table celled collapsing unstackable sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === "name" ? direction : null}
                onClick={this.sortHandler("name")}
              >
                Name
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "totalSpeed" ? direction : null}
                onClick={this.sortHandler("totalSpeed")}
              >
                Current Speed
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "speedBonus" ? direction : null}
                onClick={this.sortHandler("speedBonus")}
              >
                Speed Bonus
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "initiative" ? direction : null}
                onClick={this.sortHandler("initiative")}
              >
                Initiative
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "turnCount" ? direction : null}
                onClick={this.sortHandler("turnCount")}
              >
                Turns Taken
              </Table.HeaderCell>
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
            charSpeedBonus={this.props.addCharacter.speedBonus}
            charInit={this.props.addCharacter.initiative}
            changeName={this.props.changeAddCharName}
            changeSpeed={this.props.changeAddCharSpeed}
            changeSpeedBonus={this.props.changeAddCharSpeedBonus}
            changeInit={this.props.changeAddCharInit}
            addChar={this.props.addChar}
            charToAdd={this.props.addCharacter}
            addDisable={addDisabled}
          />
        </Table>

        <Button onClick={this.props.initiativePass}>Next Turn</Button>

        <br />
        {disabledText}
        <br />
        <a href="/">Return to Home</a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    charsInCombat: state.cmbt.charactersInCombat,
    addCharacter: state.cmbt.addChar
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
    changeAddCharSpeedBonus: newSpeedBonus =>
      dispatch(actionCreators.changeAddCharSpeedBonus(newSpeedBonus)),
    changeAddCharInit: newInit =>
      dispatch(actionCreators.changeAddCharInit(newInit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Initiative);
