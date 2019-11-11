import React from "react";
import { Button, Form, Input } from "semantic-ui-react";

const signInForm = props => {
  return (
    <Form>
      <Form.Field>
        <label>Email:</label>
        <Input type="email" placeholder="Email" onChange={(event) => props.propsToPass.changeEmail(event.target.value)}/>
      </Form.Field>
      <Form.Field>
        <label>Password:</label>
        <Input type="password" placeholder="Password" onChange={(event) => props.propsToPass.changePassword(event.target.value)}/>
      </Form.Field>
      <Button type="submit" disabled={props.noLogin}>Submit</Button>
    </Form>
  );
};

export default signInForm;
