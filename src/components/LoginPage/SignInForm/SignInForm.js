import React from "react";
import { Button, Form } from "semantic-ui-react";

const signInForm = props => {
  return (
    <Form>
      {props.body}
      <Button disabled={props.noLogin} type="submit">
        Login
      </Button>
    </Form>
  );
};

export default signInForm;
