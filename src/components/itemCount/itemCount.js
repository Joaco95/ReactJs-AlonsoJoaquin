import { Button } from "react-bootstrap";
import { useState } from "react";

export const ItemCount = ({ max, min = 0, agregar }) => {
  const [algo, setalgo] = useState(min);

  const Suma = () => {
    algo < max && setalgo(algo + 1);
  };

  const Resta = () => {
    algo > min && setalgo(algo - 1);
  };

  return (
    <div>
      <Button variant="outline-danger" onClick={Resta}>
        -
      </Button>{" "}
      <h5>{algo}</h5>
      <Button variant="outline-danger" onClick={Suma}>
        +
      </Button>{" "}
      <Button
        variant="danger"
        disabled={min === algo}
        onClick={() => agregar(algo)}
      >
        Comprar
      </Button>
    </div>
  );
};
