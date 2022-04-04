import "./App.css";
import { Link, NavLink } from "react-router-dom";
function App() {
  return (
    <>
      <h1>Book Keeper</h1>

      <nav style={{ borderBottom: "1px solid" }}>
        <NavLink style={{ marginRight: "10px" }} to="/expenses">
          Expenses
        </NavLink>
        <NavLink to="/invoices">Invoices</NavLink>
      </nav>
    </>
  );
}
export default App;
