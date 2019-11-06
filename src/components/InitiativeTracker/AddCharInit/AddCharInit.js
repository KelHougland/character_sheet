import React from "react";

import { Button, Table } from "semantic-ui-react";

// let charNames = this.props.charsInCombat.map(char => char.name.toLowerCase());
// charNames.push("");
// charNames.push("name");
// charNames.push("round");
// let addDisabled = true;
// let disabledText =
//   "Please valid name, speed, and initiative to add a character";
// if (
//   !charNames.includes(this.props.addCharacter.name.toLowerCase()) &&
//   !isNaN(Number(this.props.addCharacter.speed)) &&
//   !isNaN(Number(this.props.addCharacter.initiative))
// ) {
//   addDisabled = false;
//   disabledText = null;
// }
const addCharForm = props => (
  <Table.Footer>
    <Table.Row>
      <Table.HeaderCell>
        <input
          type="text"
          value={props.charName}
          onChange={event => props.changeName(event.target.value)}
        ></input>
      </Table.HeaderCell>
      <Table.HeaderCell>
        <input
          type="text"
          value={props.charSpeed}
          onChange={event => props.changeSpeed(event.target.value)}
        ></input>
      </Table.HeaderCell>
      <Table.HeaderCell>
        <input
          type="text"
          value={props.charInit}
          onChange={event => props.changeInit(event.target.value)}
        ></input>
      </Table.HeaderCell>
      <Table.HeaderCell>0</Table.HeaderCell>
      <Table.HeaderCell>
        <Button
          onClick={() => props.addChar(Object.assign({}, props.charToAdd))}
          //disabled={addDisabled}
        >
          +
        </Button>
      </Table.HeaderCell>
    </Table.Row>
  </Table.Footer>
);

export default addCharForm;
