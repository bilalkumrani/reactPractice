import React from "react";
import UpdatedComponent from "../withCounterHOC";

const HoverCount = (props) => {
  const { count, increment } = props;
  return (
    <div>
      <h1 onMouseOver={increment}>you clicked me {count} times</h1>
    </div>
  );
};

export default UpdatedComponent(HoverCount);
