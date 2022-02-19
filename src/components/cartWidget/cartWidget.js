import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <ImCart className="img container" />
      </Link>
    </div>
  );
};
