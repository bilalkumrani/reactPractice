import "./App.css";
import { useState, useReducer, useEffect, useRef } from "react";
import axios from "axios";
function App() {
  // USE STATE HOOK
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  // });
  // const handleChange = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };
  // return (
  //   <>
  //     <input name="name" onChange={handleChange} />
  //     <input name="email" onChange={handleChange} />
  //   </>
  // );
  //USE REDUCER HOOK
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "CHANGENAME":
  //       return {
  //         name: action.name,
  //       };
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, { name: "" });
  // return (
  //   <>
  //     <input
  //       onChange={(e) => {
  //         dispatch({ type: "CHANGENAME", name: e.target.value });
  //       }}
  //     />
  //     <h1>{JSON.stringify(state)}</h1>
  //   </>
  // );
  // USEEFFCT HOOK

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/comments")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("error body");
  //     });

  //   return () => {
  //     console.log("this is cleanup code (componentWillUnmount)");
  //   };
  // }, []);

  //USEREF HOOK
  const inputRef = useRef(null);

  return (
    <>
      <input placeholder="type.." ref={inputRef} />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
          inputRef.current.focus();

          //clearing text field
          inputRef.current.value = "";
        }}
      >
        Focus on text field
      </button>
    </>
  );
}
export default App;
