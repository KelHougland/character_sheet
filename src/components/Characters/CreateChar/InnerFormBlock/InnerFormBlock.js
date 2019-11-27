import React from "react";

import "./InnerFormBlock";

const innerFormBlock = props => {

   const innerContent = Object.keys(props.content).map(key => <p className="innerBlock" key={key}>{key}:</p>)
  return innerContent;
};

export default innerFormBlock;
