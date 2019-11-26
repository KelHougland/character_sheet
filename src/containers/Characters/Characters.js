import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "semantic-ui-react";
import CreateCharForm from "../../components/Characters/CreateCharForm/CreateCharForm";
import * as actionCreators from "../../store/actions/index";
import "./Characters.css";

class Characters extends Component {
  state = {
    view: "initial"
  };
  componentDidMount() {
    this.props.fetchChars();
  }

  generateListView() {
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
    return charTable;
  }

  changeViewHandler = view => {
    let prevState = this.state;
    this.props.fetchSheet();
    return this.setState({ ...prevState, view: view });
  };

  render() {
    let pageView = null;
    if (this.state.view === "initial") {
      pageView = this.generateListView();
    } else {
      pageView = (
        <Button onClick={() => this.changeViewHandler("initial")}>
          Return to List
        </Button>
      );
    }

    let createChar = (
      <Button onClick={() => this.changeViewHandler("create")}>
        Create a Character
      </Button>
    );

    if (this.state.view === "create" && this.props.sheet) {
      createChar = <CreateCharForm sheet={this.props.sheet}/>;
    }

    return (
      <div>
        <h1>
          This will be the characters page, including list of characters with
          components for individual characters
        </h1>
        {pageView}
        <br />
        {createChar}
        <br />
        <a href="/">Return to Home</a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.char.characters,
    char: state.char.character,
    sheet: state.char.sheet
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChars: () => dispatch(actionCreators.fetchCharacters()),
    fetchSheet: () => dispatch(actionCreators.fetchSheet())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
