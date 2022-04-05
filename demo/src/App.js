import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <input ref={inputRef} />
      <button
        onClick={() => {
          setSearchParams({ filter: inputRef.current.value });
        }}
      >
        set data
      </button>
    </>
  );
}
export default App;
