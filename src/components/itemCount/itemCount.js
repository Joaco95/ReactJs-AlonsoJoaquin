import { Button } from "react-bootstrap";

export const ItemCount = ({ max, min = 0, i, setI }) => {
  const Suma = () => {
    i < max && setI(i + 1);
  };

  const Resta = () => {
    i > min && setI(i - 1);
  };

  return (
    <div>
      <Button variant="outline-danger" onClick={Resta}>
        -
      </Button>{" "}
      <h5>{i}</h5>
      <Button variant="outline-danger" onClick={Suma}>
        +
      </Button>{" "}
    </div>
  );
};
