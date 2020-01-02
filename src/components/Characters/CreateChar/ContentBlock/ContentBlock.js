import React from "react";

import "./ContentBlock.css";
import { Input, Button } from "semantic-ui-react";

const spreadContent = dictObject => {
  const content = Object.keys(dictObject).map(key => (
    <div key={key}>
      {key}:
      <Input type="text" value={dictObject[key]} />
    </div>
  ));
  return content;
};

const contentBlock = props => {
  const innerContent = Object.keys(props.content).map(key => (
    <div className="contentBlock" key={key}>
      {key}:{spreadContent(props.content[key])}
      <Button>Add Another</Button>
      <Input></Input>
    </div>
  ));
  return innerContent;
};

export default contentBlock;
