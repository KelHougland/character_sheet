import React from "react";

import { Button, Table } from "semantic-ui-react";

const tableContent = props => {
  let charView = props.charList.map(character => (
    <Table.Row
      positive={character.initiative >= 50 ? true : false}
      key={character.id}
    >
      <Table.Cell>{character.name}</Table.Cell>
      <Table.Cell>{character.totalSpeed}</Table.Cell>
      <Table.Cell>
        {character.speedBonus}{" "}
        <Button onClick={() => props.propsToPass.speedIncrement(character.id)}>
          +1
        </Button>
        <Button onClick={() => props.propsToPass.speedDecrement(character.id)}>
          -1
        </Button>
      </Table.Cell>
      <Table.Cell>
        {character.initiative}{" "}
        <Button onClick={() => props.propsToPass.initIncrement1(character.id)}>
          +1
        </Button>
        <Button onClick={() => props.propsToPass.initDecrement1(character.id)}>
          -1
        </Button>
        <Button onClick={() => props.propsToPass.initIncrement5(character.id)}>
          +5
        </Button>
        <Button onClick={() => props.propsToPass.initDecrement5(character.id)}>
          -5
        </Button>
      </Table.Cell>
      <Table.Cell>{character.turnCount}</Table.Cell>

      <Table.Cell>
        <Button onClick={() => props.propsToPass.defActDecrement(character.id)} disabled = {(character.initiative < -25) ? true : false}>
          Take
        </Button>
      </Table.Cell>

      <Table.Cell>
        {" "}
        <Button
          onClick={() => props.propsToPass.delChar(character.id)}
          disabled={character.name === "Round"}
        >
          x
        </Button>
      </Table.Cell>
    </Table.Row>
  ));
  return <Table.Body>{charView}</Table.Body>;
};

export default tableContent;
