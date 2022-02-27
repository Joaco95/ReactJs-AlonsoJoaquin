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
