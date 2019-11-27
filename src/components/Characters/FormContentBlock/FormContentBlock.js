import React from "react";
import "./FormContentBlock.css"

const formContentBlock = props => {
  let blockOutput = Object.keys(props.blockContent).map(key => <p className="innerBlock" key={key}>{key}</p>)
  return blockOutput;
};

export default formContentBlock;
