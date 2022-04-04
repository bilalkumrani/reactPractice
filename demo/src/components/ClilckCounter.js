import React from "react";
import Withcounter from "./withCounter";

const Clilckcounter = (props) => {
  return (
    <div>
      <button onClick={props.increment}>Click me {props.count}</button>
    </div>
  );
};

export default Withcounter(Clilckcounter);
