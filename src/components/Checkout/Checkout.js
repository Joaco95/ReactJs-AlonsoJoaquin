import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Button, Form } from "react-bootstrap";
import { subirData } from "../FireBase/subirData";
import * as yup from "yup";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const msjError = "Campo Obligatorio";

  const { carrito, addItemTotal, clear } = useContext(CartContext);
  const [miOrden, setMiOrden] = useState(null);

  const validationSchema = yup.object({
    email: yup.string().required(msjError).email("Correo invalido"),
    emailRepetido: yup.string().required(msjError).email("Correo invalido"),
    nombre: yup.string().required(msjError),
    apellido: yup.string().required(msjError),
    telefono: yup.number().required(msjError),
  });

  const [valores, setValores] = useState({
    email: "",
    emailRepetido: "",
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const cambioInput = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  const capturar = (e) => {
    e.preventDefault();
    subirData(valores, carrito, addItemTotal, clear, setMiOrden);
  };

  if (miOrden) {
    return (
      <div className="container">
        <h2>Gracias por comprar</h2>
        <hr />
        <h2>Su numero de orden es:{miOrden} </h2>
        <Link to="/">
          {" "}
          <Button variant="primary" type="submit">
            Seguir comprando
          </Button>
        </Link>
      </div>
    );
  }

  if (carrito.length === 0) {
    return (
      <div className="container">
        <h1>EL CARRITO ESTA VACIO VUELVA A SELECIONAR SU COMPRA</h1>
        <Link to="/">
          <Button variant="primary" type="submit">
            Volver
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="container">Formulario</h1>
      <hr />
      <Form className="container" onSubmit={capturar}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={valores.email}
            onChange={cambioInput}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Repetir Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="emailRepetido"
            value={valores.emailRepetido}
            onChange={cambioInput}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="name"
            placeholder="Ingrese nombre"
            name="nombre"
            value={valores.nombre}
            onChange={cambioInput}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="name"
            placeholder="Ingrese apellido"
            name="apellido"
            value={valores.apellido}
            onChange={cambioInput}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese telefono"
            name="telefono"
            value={valores.telefono}
            onChange={cambioInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
};
