import "./App.css";
import { Link, NavLink } from "react-router-dom";
function App() {
  return (
    <>
      <h1>Book Keeper</h1>

      <nav style={{ borderBottom: "1px solid" }}>
        <NavLink> Invoices </NavLink>
        <NavLink> Expenses </NavLink>
      </nav>
    </>
  );
}
export default App;
