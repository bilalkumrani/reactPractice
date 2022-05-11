import React from "react";
import store from "../../app/store";
import { ordered, restocked } from "./cakeSlice";
import { useSelector, useDispatch } from "react-redux";

const Cakeview = () => {
  const cakes = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Number of cakes - {cakes}</h3>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </div>
  );
};

export default Cakeview;
