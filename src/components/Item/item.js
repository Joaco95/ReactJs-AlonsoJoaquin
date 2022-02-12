import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({
  id,
  title,
  description,
  price,
  pictureUrl,
  año,
  songs,
}) => {
  return (
    <>
      <div className="item-div">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pictureUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>${price}</Card.Text>
            <Card.Text>{año}</Card.Text>
            <Link to={`/detail/${id}`}>
              <Button variant="primary">Producto</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
