import React from "react";
import Withcounter from "./withCounter";

const Hovercounter = (props) => {
  return (
    <div>
      <h1 onMouseOver={props.increment}>Hover me {props.count}</h1>
    </div>
  );
};

export default Withcounter(Hovercounter);
