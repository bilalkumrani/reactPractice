import React from "react";
import { AppContext } from "./App";
import { useContext } from "react";

const User = () => {
  const { data } = useContext(AppContext);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default User;
