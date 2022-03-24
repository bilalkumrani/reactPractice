import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Clickcounter from "./component/ClickCounter";
import HoverCount from "./component/HoverCount";

function App() {
  return (
    <>
      <Clickcounter />
      <HoverCount />
    </>
  );
}
export default App;
