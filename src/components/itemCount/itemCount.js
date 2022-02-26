import { Button } from "react-bootstrap";
import { useState } from "react";

export const ItemCount = ({ max, min = 0, agregar }) => {
  const [cant, setCant] = useState(min);

  const Suma = () => {
    cant < max && setCant(cant + 1);
  };

  const Resta = () => {
    cant > min && setCant(cant - 1);
  };

  /*  const handleAgregar = () => {
    if (cantidad === 0) return;

    if (!isInCart(id)) {
      const agregar = {
        id,
        title,
        price,
        stock,
        cantidad,
      };

      addItem(agregar);
    }
  }; */

  return (
    <div>
      <Button variant="outline-danger" onClick={Resta}>
        -
      </Button>{" "}
      <h5>{cant}</h5>
      <Button variant="outline-danger" onClick={Suma}>
        +
      </Button>{" "}
      <Button
        variant="danger"
        disabled={min === cant}
        onClick={() => agregar(cant)}
      >
        Comprar
      </Button>
    </div>
  );
};
