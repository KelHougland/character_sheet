import React from "react";

import { Button, Table } from "semantic-ui-react";

const tableContent = props => {
  let charView = props.charList
    .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
    .map(character => (
      <Table.Row key={character.id}>
        <Table.Cell>{character.name}</Table.Cell>
        <Table.Cell>
          {character.speed + character.speedBonus}{" "}
          <Button
            onClick={() => props.propsToPass.speedIncrement(character.id)}
          >
            +1
          </Button>
          <Button
            onClick={() => props.propsToPass.speedDecrement(character.id)}
          >
            -1
          </Button>
        </Table.Cell>
        <Table.Cell>
          {character.initiative}{" "}
          <Button
            onClick={() => props.propsToPass.initIncrement1(character.id)}
          >
            +1
          </Button>
          <Button
            onClick={() => props.propsToPass.initDecrement1(character.id)}
          >
            -1
          </Button>
          <Button
            onClick={() => props.propsToPass.initIncrement5(character.id)}
          >
            +5
          </Button>
          <Button
            onClick={() => props.propsToPass.initDecrement5(character.id)}
          >
            -5
          </Button>
        </Table.Cell>
        <Table.Cell>{character.turnCount}</Table.Cell>
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
