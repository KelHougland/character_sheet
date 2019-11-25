import React from "react";

import { Button, Table, Input } from "semantic-ui-react";

const addCharForm = props => (
  <Table.Footer>
    <Table.Row>
      <Table.HeaderCell>
        <Input
          type="text"
          value={props.charName}
          onChange={event => props.changeName(event.target.value)}
        ></Input>
      </Table.HeaderCell>
      <Table.HeaderCell>
        <Input
          type="text"
          value={props.charSpeed}
          onChange={event => props.changeSpeed(event.target.value)}
        ></Input>
      </Table.HeaderCell>
      <Table.HeaderCell>
        <Input
          type="text"
          value={props.charSpeedBonus}
          onChange={event => props.changeSpeedBonus(event.target.value)}
        ></Input>
      </Table.HeaderCell>
      <Table.HeaderCell>
        <Input
          type="text"
          value={props.charInit}
          onChange={event => props.changeInit(event.target.value)}
        ></Input>
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
