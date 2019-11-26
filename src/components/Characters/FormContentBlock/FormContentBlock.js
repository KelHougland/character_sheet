import React from "react";

const formContentBlock = props => {
  const blockOutput = ''
  If(Object.keys(props.block)) {
    
  }
  
  
  
  Object.keys(props.block).map(key => <p key={key}>{key}</p>)

  return <div>{blockOutput}</div>;
};

export default formContentBlock;
