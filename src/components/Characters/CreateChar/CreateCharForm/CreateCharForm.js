import React from "react";

import FormContentBlock from "../FormContentBlock/FormContentBlock";
import "./CreateCharForm.css";

const formContentHandler = formInfo => {
  let formContent = Object.keys(formInfo).map(key => {
    let innerContent = <FormContentBlock blockContent={formInfo[key]} />;
    return (
      <div className="mainBlock" key={key}>
        <h2>{key}</h2> {innerContent}
      </div>
    );
  });
  return formContent;
};

const createCharForm = props => {
  const characterSheet = formContentHandler(props.sheet);
  return <div className="topLevel"><h1>{props.system}</h1>{characterSheet}</div>;
};

export default createCharForm;
