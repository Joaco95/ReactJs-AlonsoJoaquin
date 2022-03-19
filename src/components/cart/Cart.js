import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { carrito, addItemTotal, clear, removeItem } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">
          <Button variant="outline-dark">Volver Tienda</Button>
        </Link>
      </>
    );
  }

  return (
    <>
      {carrito.map((elemento) => (
        <div key={elemento.id}>
          <h3>Articulo: {elemento.title}</h3>
          <p>Cantidad: {elemento.cantidad}</p>
          <p>Precio: ${elemento.price * elemento.cantidad}</p>

          <Button
            variant="outline-dark"
            onClick={() => removeItem(elemento.id)}
          >
            Borrar articulo
          </Button>
        </div>
      ))}

      <hr />
      <h1>Total: ${addItemTotal()}</h1>
      <div className="mt-5">
        <Button variant="outline-dark" onClick={clear}>
          Vaciar Carrito
        </Button>
        <Link to="/Datos">
          <Button variant="outline-dark">terminar Compra</Button>
        </Link>
      </div>
    </>
  );
};
