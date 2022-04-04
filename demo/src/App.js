import "./App.css";
import { Link, NavLink, useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <h1>Book Keeper</h1>

      <nav style={{ borderBottom: "1px solid", margin: "2rem" }}>
        <NavLink style={{ marginRight: "10px" }} to="/expenses">
          Expenses
        </NavLink>
        <NavLink to="/invoices">Invoices</NavLink>

        <input
          value={searchParams.get("filter") || ""}
          onChange={(e) => {
            let filter = e.target.value;
            if (e) {
              setSearchParams({ filter });
            } else {
              searchParams({});
            }
          }}
        />
      </nav>
    </>
  );
}
export default App;
