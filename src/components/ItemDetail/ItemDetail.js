import { Card } from "react-bootstrap";

export const ItemDetail = ({
  id,
  title,
  description,
  price,
  pictureUrl,
  año,
  songs,
}) => {
  console.log(songs);
  console.log(año);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{año}</Card.Text>
          <Card.Text>{songs}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
