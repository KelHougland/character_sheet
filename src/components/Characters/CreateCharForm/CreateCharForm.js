import React from "react";
import FormContentBlock from "../FormContentBlock/FormContentBlock";

const formContentHandler = formInfo => {
   let formContent = ''
    if (Object.keys(formInfo).length>1){
        formContent = Object.keys(formInfo).map(key => <div><ul>{key}</ul><FormContentBlock block={formInfo[key]}/></div>)
    } else {  formContent = <FormContentBlock block={formInfo} />;}
    console.log("formInfo", formInfo)
    console.log("formcontent", formContent)
    console.log(Object.keys(formInfo).length)
  return formContent;
};

const createCharForm = props => {
  const characterSheet = formContentHandler(props.sheet);
  return {characterSheet};
};

export default createCharForm;
