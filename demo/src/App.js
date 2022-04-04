import "./App.css";
import { useState, useReducer } from "react";

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
}
export default App;
