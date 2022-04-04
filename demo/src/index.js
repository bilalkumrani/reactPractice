import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./components/Expenses";
import Invoices from "./components/Invoices";
import Details from "./components/Details";
ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route index element={<Expenses />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/invoices" element={<Invoices />}>
        <Route path=":id" element={<Details />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
