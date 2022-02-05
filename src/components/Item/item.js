import { Card, Button } from "react-bootstrap";

export const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <>
      <div className="item-div">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pictureUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>${price}</Card.Text>
            <Button variant="primary">Al Carrito</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
