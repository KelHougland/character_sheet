import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";

class Initiative extends Component {
  render() {
    let charView = this.props.chars
      .sort((a, b) => (a.initiative < b.initiative ? 1 : -1))
      .map(character => (
        <Table.Row>
          <Table.Cell>{character.name}</Table.Cell>
          <Table.Cell>
            {character.speed + character.speedBonus}{" "}
            <Button onClick={() => this.props.speedIncrement(character.id)}>
              +1
            </Button>
            <Button onClick={() => this.props.speedDecrement(character.id)}>
              -1
            </Button>
          </Table.Cell>
          <Table.Cell>
            {character.initiative}
            <Button onClick={() => this.props.initIncrement1(character.id)}>
              +1
            </Button>
            <Button onClick={() => this.props.initDecrement1(character.id)}>
              -1
            </Button>
            <Button onClick={() => this.props.initIncrement5(character.id)}>
              +5
            </Button>
            <Button onClick={() => this.props.initDecrement5(character.id)}>
              -5
            </Button>
          </Table.Cell>
          <Table.Cell>{character.turnCount}</Table.Cell>
          <Table.Cell>
            {" "}
            <Button
              onClick={() => this.props.delChar(character.id)}
              disabled={character.name === "Round"}
            >
              x
            </Button>
          </Table.Cell>
        </Table.Row>
      ));

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
          <Table.Body>{charView}</Table.Body>
          {this.props.charForm}
        </Table>
        <Button onClick={this.props.initiativePass}>Next Turn</Button>
        <br />
        {this.props.bottomText}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.charactersInCombat
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
    delChar: id => dispatch(actionCreators.delChar(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Initiative);
