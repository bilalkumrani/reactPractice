import React from "react";
import { AppContext } from "./App";
import { useContext } from "react";

const Login = () => {
  const { setData } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
    </div>
  );
};

export default Login;
