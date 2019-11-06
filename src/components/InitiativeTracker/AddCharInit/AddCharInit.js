import React from "react";

import { Button, Table } from "semantic-ui-react";

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
          disabled={props.addDisable}
        >
          +
        </Button>
      </Table.HeaderCell>
    </Table.Row>
  </Table.Footer>
);

export default addCharForm;
