import React from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";

const signUpForm = props => {
  return (
    <Form onSubmit={props.onSub}>
      {props.body}
      <Form.Field key="accept">
        <label>I have read and accept the terms and conditions:</label>
        <Checkbox onChange={props.onAccept} />
        <p onClick={props.terms}>
          Click here to read the terms and conditions.
        </p>
      </Form.Field>
      <Button disabled={props.noSubmit} type="submit">
        Create Account
      </Button>
    </Form>
  );
};

export default signUpForm;
