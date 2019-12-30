import React from "react";
import { Form, Button } from "semantic-ui-react";

import FormContentBlock from "../FormContentBlock/FormContentBlock";
import "./CreateCharForm.css";

const formContentHandler = formInfo => {
  let formContent = Object.keys(formInfo).map(key => {
    let innerContent = <FormContentBlock blockContent={formInfo[key]} />;
    return (
      <div key={key}>
        <h2 >{key}</h2>
        <div className="mainBlock" >
          {innerContent}
        </div>
      </div>
    );
  });
  return formContent;
};

const createCharForm = props => {
  const characterSheet = formContentHandler(props.sheet);
  return (
    <Form className="topLevel">
      <h1>{props.system}</h1>
      {characterSheet}
      <Button disabled={true} type="submit">
        Create Character
      </Button>
    </Form>
  );
};

export default createCharForm;
