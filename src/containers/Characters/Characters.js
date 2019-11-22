import React, { Component } from "react";
import { connect } from "react-redux";

class Characters extends Component {
  render() {
    return (
      <div>
        <h1>
          This will be the characters page, including list of characters with
          components for individual characters
        </h1>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
