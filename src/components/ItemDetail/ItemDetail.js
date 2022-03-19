import { Card, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { ItemCount } from "../itemCount/itemCount";

export const ItemDetail = ({
  id,
  title,
  description,
  price,
  pictureUrl,
  año,
  songs,
  stock,
}) => {
  const [cantidad, setCantidad] = useState();

  const { addItem, isInCart } = useContext(CartContext);

  const onAdd = (contenedor) => {
    setCantidad(contenedor);

    const agregar = {
      id,
      title,
      price,
      stock,
      cantidad: contenedor,
    };

    addItem(agregar);
  };

  return (
    <div className="container m-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{año}</Card.Text>
          <Card.Text>$ {price}</Card.Text>

          <Card.Text>{songs}</Card.Text>
          <Card.Text>STOCK DEL PRODUCTO: {stock}</Card.Text>
        </Card.Body>
      </Card>
      {cantidad ? (
        <Link to="/cart">
          <Button variant="primary">Ir al Carrito</Button>{" "}
        </Link>
      ) : (
        <>
          <ItemCount max={stock} agregar={onAdd} />
        </>
      )}
    </div>
  );
};
