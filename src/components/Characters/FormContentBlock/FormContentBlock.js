import React from "react";

const formContentBlock = props => {
  let blockOutput = "";
  if (Object.keys(props.block).length > 1) {
    Object.keys(props.block).map(key => <li key={key}>{key}</li>);
  } else {
    blockOutput = props.block
  }
  console.log("blockoutput", blockOutput)
  return {blockOutput};
};

export default formContentBlock;
