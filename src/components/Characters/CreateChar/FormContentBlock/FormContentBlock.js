import React from "react";
import {Form, Input} from "semantic-ui-react"

import InnerFormBlock from "../InnerFormBlock/InnerFormBlock"

import "./FormContentBlock.css"

const formContentBlock = props => {
  let blockOutput= ''
  if(Object.keys(props.blockContent[Object.keys(props.blockContent)[0]]).length > 0) {
    blockOutput = Object.keys(props.blockContent).map(key => <div className="subBlock" key={key}><h3>{key}</h3> <InnerFormBlock content={props.blockContent[key]}/></div>)
  } else {
    blockOutput =  Object.keys(props.blockContent).map(key => <Form.Field key={key}>{key}:<Input type="text" value={props.blockContent[key]}/></Form.Field>)
  }
  
  return blockOutput;
};

export default formContentBlock;
