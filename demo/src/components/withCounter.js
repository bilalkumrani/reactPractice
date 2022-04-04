import React from "react";
import { useState } from "react";
const Withcounter = (Original) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);
    const handleChange = () => {
      setCount(count + 1);
    };
    return <Original increment={handleChange} count={count} />;
  };

  return NewComponent;
};

export default Withcounter;
