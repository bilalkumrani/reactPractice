import React from "react";
import { getInvoices } from "../data";
import { NavLink, Outlet } from "react-router-dom";
const Invoices = () => {
  return (
    <div style={{ margin: "2rem", borderBottom: "1px solid", width: "10rem" }}>
      {getInvoices().map((invoice) => {
        return (
          <NavLink to={`${invoice.number}`}>
            {" "}
            <h6>{invoice.name}</h6>{" "}
          </NavLink>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Invoices;
