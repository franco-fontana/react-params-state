import React from "react";
import Child from "./Child";
import { Button } from "semantic-ui-react";
import { useState } from "react";
import "./App.css";

export default function Parent() {
  const [data, setData] = useState("");
  const [childdata, setChilddata] = useState("");

  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  };

  const childToParent = (childdata) => {
    setChilddata(childdata);
  };

  const childToParentAlert = () => {
    alert(
      "This is an alert from the Child Component passed from Parent Component."
    );
  };

  return (
    <div className="App">
      <div>
        <Button primary onClick={() => parentToChild()}>
          Click Parent
        </Button>
        <Child
          parentToChild={data}
          childToParent={childToParent}
          childToParentAlert={childToParentAlert}
        />
        {childdata}
      </div>
    </div>
  );
}
