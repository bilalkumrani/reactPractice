import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  // const obj = {
  //   text: "Hello",
  // };

  // const obj1 = {
  //   text: "Hello",
  // };
  const [counter, setCounter] = useState(0);
  // const getData = () => {
  //   console.log("hello");
  //   return 1 + 2 + 3;
  // };
  const [state, setState] = useState();

  useEffect(() => {
    // setCounter((counter) => {
    //   return counter + 1;
    // });
    // setCounter((counter) => {
    //   return counter + 1;
    // });
    //console.log("iam inside useeffect");
  }, []);
  const handleIncrement = () => {
    setCounter((counter) => {
      return counter + 1;
    });
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}> increment</button>
    </>
  );
}
export default App;
