import React from "react";
import { Button, Form, Input, Checkbox } from "semantic-ui-react";

const signUpForm = props => {
  return (
    <Form>
      <Form.Field>
        <label>Email:</label>
        <Input
          type="email"
          placeholder="Email"
          onChange={event => props.propsToPass.changeEmail(event.target.value)}
        />
        <p>Please enter a valid email.</p>
      </Form.Field>
      <Form.Field>
        <label>Confirm Email:</label>
        <Input
          type="email"
          placeholder="Confirm Email"
          onChange={event =>
            props.propsToPass.changeEmailConfirm(event.target.value)
          }
        />
        <p>Emails must match.</p>
      </Form.Field>
      <Form.Field>
        <label>Username:</label>
        <Input
          type="text"
          placeholder="Username"
          onChange={event =>
            props.propsToPass.changeUserName(event.target.value)
          }
        />
        <p>Username must be at least 6 but no more than 14 characters long.</p>
      </Form.Field>
      <Form.Field>
        <label>Password:</label>
        <Input
          type="password"
          placeholder="Password"
          onChange={event =>
            props.propsToPass.changePassword(event.target.value)
          }
        />
        <p>Password must be at least 9 characters long.</p>
      </Form.Field>
      <Form.Field>
        <label>Confirm Password:</label>
        <Input
          type="password"
          placeholder="Confirm Password"
          onChange={event =>
            props.propsToPass.changePasswordConfirm(event.target.value)
          }
        />
        <p>Passwords must match.</p>
      </Form.Field>
      <Form.Field>
        <label>I have read and accept the terms and conditions:</label>
        <Checkbox onChange={props.propsToPass.acceptTerms} />
        <p onClick={props.terms}>
          Click here to read the terms and conditions.
        </p>
      </Form.Field>
      <Button
        type="submit"
        disabled={props.noSubmit}
        onClick={() =>
          props.propsToPass.createUser({
            email: props.propsToPass.userEmail,
            password: props.propsToPass.userPswd
          })
        }
      >
        Submit
      </Button>
    </Form>
  );
};

export default signUpForm;
