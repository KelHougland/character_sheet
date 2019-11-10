import React from "react";
import { Button, Form, Input, Checkbox } from "semantic-ui-react";

const signUpForm = props => {
  return (
    <Form>
      <Form.Field>
        <label>Email:</label>
        <Input type="email" placeholder="Email" onChange={(event) => props.propsToPass.changeEmail(event.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Confirm Email:</label>
        <Input type="email" placeholder="Confirm Email"  onChange={(event) => props.propsToPass.changeEmailConfirm(event.target.value)}/>
      </Form.Field>
      <Form.Field>
        <label>Username:</label>
        <Input type="text" placeholder="Last Name"  onChange={(event) => props.propsToPass.changeUserName(event.target.value)}/>
      </Form.Field>
      <Form.Field>
        <label>Password:</label>
        <Input type="password" placeholder="Password"  onChange={(event) => props.propsToPass.changePassword(event.target.value)}/>
      </Form.Field>
      <Form.Field>
        <label>Confirm Password:</label>
        <Input type="password" placeholder="Confirm Password"  onChange={(event) => props.propsToPass.changePasswordConfirm(event.target.value)}/>
      </Form.Field>
      <Form.Field>
        <label onClick={props.terms}>I accept the terms and conditions:</label>
        <Checkbox />
      </Form.Field>
      <Button type="submit" disabled={props.noSubmit} onClick={props.onSubmit}>Submit</Button>
    </Form>
  );
};

export default signUpForm;
