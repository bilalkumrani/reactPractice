import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = (props) => {
  return (
    <>
      <h3 className="text-warning">{props.count}</h3>
      <AiOutlineShoppingCart size="3em" color="white" />
    </>
  );
};
export default Cart;
