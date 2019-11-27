import React from "react";

import FormContentBlock from "../FormContentBlock/FormContentBlock";
import "./CreateCharForm.css";

const formContentHandler = formInfo => {
  let formContent = Object.keys(formInfo).map(key => {
    let innerContent = <FormContentBlock blockContent={formInfo[key]} />;
    return (
      <div className="mainBlock" key={key}>
        {key} {innerContent}
      </div>
    );
  });
  return formContent;
};

const createCharForm = props => {
  const characterSheet = formContentHandler(props.sheet);
  return <div className="topLevel">{characterSheet}</div>;
};

export default createCharForm;
