import React from "react";
import { Button, Form, Input, Checkbox } from "semantic-ui-react";

const signUpForm = props => {
  return (
    <Form>
      <Form.Field>
        <label>Email:</label>
        <Input type="email" placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <label>Username:</label>
        <Input type="text" placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <label>Password:</label>
        <Input type="password" placeholder="Password" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I accept the terms and conditions:" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default signUpForm;
