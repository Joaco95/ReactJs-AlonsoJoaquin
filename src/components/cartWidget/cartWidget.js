import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";

export const CartWidget = () => {
  const { addItemQuantity } = useContext(CartContext);

  return (
    <Link to="/cart">
      <ImCart className="img container" />
      <span> {addItemQuantity()} </span>
    </Link>
  );
};
