import React from "react";
import FormContentBlock from "../FormContentBlock/FormContentBlock";

const formContentHandler = formInfo => {
  const formContent = <FormContentBlock block={formInfo} />;
  return formContent;
};

const createCharForm = props => {
  const characterSheet = formContentHandler(props.sheet);
  return <div>{characterSheet}</div>;
};

export default createCharForm;
