import React from "react";

import "./InnerFormBlock";
import {Form, Input} from 'semantic-ui-react'

const innerFormBlock = props => {

   const innerContent = Object.keys(props.content).map(key => <Form.Field className="innerBlock" key={key}>{key}:<Input type="text" value={props.content[key]} /></Form.Field>)
  return innerContent;
};

export default innerFormBlock;
