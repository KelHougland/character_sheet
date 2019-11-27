import React from "react";
import "./FormContentBlock.css"

const formContentBlock = props => {
  let blockOutput= ''
  if(Object.keys(props.blockContent[Object.keys(props.blockContent)[0]]).length > 0) {
    blockOutput = Object.keys(props.blockContent).map(key => <p className="subBlock" key={key}>{key}</p>)
  } else {
    blockOutput = Object.keys(props.blockContent).map(key => <p key={key}>{key}</p>)
  }
  
  return blockOutput;
};

export default formContentBlock;
