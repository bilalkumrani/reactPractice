import React from "react";
import UpdatedComponent from "../withCounterHOC";

const Clickcounter = (props) => {
  const { count, increment } = props;
  return (
    <div>
      <button onClick={increment}>you clicked me {count} times</button>
    </div>
  );
};

export default UpdatedComponent(Clickcounter);
