import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { BrowserRouter} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import { useState } from "react";
import Operations from "./components/Operations";
import MyTable from "./components/MyTable";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1)
  };

  const decrement = () => {
    setCount(count-1)
  };



return (

  <>

<div>
    <MyNavbar state={count}/>
    <BrowserRouter>
    <Routes>
    <Route exact path="home" element={<Home/>} />
    <Route exact path="table" element={<MyTable/>} />
    <Route exact path="operations"  element={<Operations increment={increment} decrement={decrement}/>}/>
    </Routes>
    </BrowserRouter>
</div>

 
  </>
  
)
  
}
export default App;
