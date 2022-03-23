import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";



const rootElement = document.getElementById("root");
render(

  <App />
  ,
  rootElement
);