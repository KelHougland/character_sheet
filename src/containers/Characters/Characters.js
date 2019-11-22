import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import * as actionCreators from "../../store/actions/index";
import "./Characters.css";

class Characters extends Component {
  componentDidMount() {
    this.props.fetchChars();
  }

  render() {
    let listOfChars = (
      <Table.Row key="1">
        <Table.Cell>None Loaded</Table.Cell>
        <Table.Cell>None Loaded</Table.Cell>
        <Table.Cell>None Loaded</Table.Cell>
      </Table.Row>
    );
    if (this.props.chars) {
      listOfChars = this.props.chars.map(character => (
        <Table.Row key={character.name + character.userName}>
          <Table.Cell>{character.name}</Table.Cell>
          <Table.Cell>{character.userName}</Table.Cell>
          <Table.Cell>{character.system}</Table.Cell>
        </Table.Row>
      ));
    }

    let charTable = (
      <Table className="charTableDiv" celled collapsing unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Character Name</Table.HeaderCell>
            <Table.HeaderCell>Player Name</Table.HeaderCell>
            <Table.HeaderCell>System</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{listOfChars}</Table.Body>
      </Table>
    );

    return (
      <div>
        <h1>
          This will be the characters page, including list of characters with
          components for individual characters
        </h1>
        {charTable}
        <br />
        <a href="/">Return to Home</a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.char.characters,
    char: state.char.character
  };
};

const mapDispatchToProps = dispatch => {
  return { fetchChars: () => dispatch(actionCreators.fetchCharacters()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
