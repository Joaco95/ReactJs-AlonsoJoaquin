import {
  collection,
  writeBatch,
  addDoc,
  Timestamp,
  query,
  where,
  documentId,
  getDocs,
} from "firebase/firestore";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "./firebase";

export const subirData = async (
  valores,
  carrito,
  addItemTotal,
  clear,
  setMiOrden
) => {
  const compra = {
    fyh: Timestamp.fromDate(new Date()),
    comprador: valores,
    items: carrito,
    total: addItemTotal(),
  };
  const subir = collection(db, "subirFirebase");
  const productos = collection(db, "articulos");
  const batch = writeBatch(db);
  const itemVacio = [];

  const q = query(
    productos,
    where(
      documentId(),
      "in",
      carrito.map((element) => element.id)
    )
  );

  const espera = await getDocs(q);

  espera.docs.forEach((doc) => {
    const pieza = carrito.find((element) => element.id === doc.id);

    if (doc.data().stock >= pieza.cantidad) {
      batch.update(doc.ref, {
        stock: doc.data().stock - pieza.cantidad,
      });
    } else {
      itemVacio.push(pieza);
    }
  });

  if (itemVacio.length === 0) {
    addDoc(subir, compra).then((resp) => {
      batch.commit();
      setMiOrden(resp.id);
      clear();
    });
  } else {
    <div className="container">
      <h2>No hay suficiente Stock para realizar su compra</h2>
      <Link to="/">
        {" "}
        <Button variant="primary" type="submit">
          Seguir comprando
        </Button>
      </Link>
    </div>;
  }

  /*  addDoc(subir, compra).then((resp) => {
    carrito.forEach((element) => {
      const stockArticulos = doc(db, "articulos", element.id);

      getDoc(stockArticulos).then((stockDb) => {
        if (element.stock >= element.cantidad) {
          updateDoc(stockArticulos, {
            stock: stockDb.data().stock - element.cantidad,
          });
        } else {
          <div className="container">
            <h2>No hay suficiente Stock para realizar su compra</h2>
            <Link to="/">
              {" "}
              <Button variant="primary" type="submit">
                Seguir comprando
              </Button>
            </Link>
          </div>;
        }
      });
    });
    setMiOrden(resp.id);
    clear();
  }); */
};
