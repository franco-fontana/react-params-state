import React from "react";
import { Button } from "semantic-ui-react";

export default function Child(props) {
  const childdata =
    "This is data from Child Component to the Parent Component.";
  return (
    <div>
      {props.parentToChild}
      <br />
      <br />
      <Button
        primary
        onClick={() => {
          props.childToParent(childdata);
          props.childToParentAlert();
        }}
      >
        Click Child
      </Button>
    </div>
  );
}
