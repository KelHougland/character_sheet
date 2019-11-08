import React from "react";
import { Button, Form, Input } from "semantic-ui-react";

const signInForm = props => {
  return (
    <Form>
      <Form.Field>
        <label>Email:</label>
        <Input type="email" placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <label>Password:</label>
        <Input type="password" placeholder="Password" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default signInForm;
