import React from "react";

const formContentHandler = (formInfo) => {
    const formContent = Object.keys(formInfo).map(key => <p key={key}>{key}</p>)
    return formContent
}

const createCharForm = props => {
  const characterSheet = formContentHandler(props.sheet)
  return <div>{ characterSheet }</div>;
};

export default createCharForm;
