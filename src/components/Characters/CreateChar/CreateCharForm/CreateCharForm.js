import React from "react";
import { Button } from "semantic-ui-react";

import ContentBlock from "../ContentBlock/ContentBlock";
import "./CreateCharForm.css";

const createCharForm = props => {
  return (
    <div className="topLevel">
      <h1>{props.system}</h1>
      <ContentBlock content={props.sheet} />
      <Button disabled={true} type="submit">
        Create Character
      </Button>
    </div>
  );
};

export default createCharForm;
