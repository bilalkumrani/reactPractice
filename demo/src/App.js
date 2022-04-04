import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Clilckcounter from "./components/ClilckCounter";
import Hovercounter from "./components/HoverCounter";

function App() {
  return (
    <>
      <Clilckcounter />
      <Hovercounter />
    </>
  );
}
export default App;
