import { ItemList } from "../itemList/itemList";
import { Articulos } from "../../articulos/articulos";
import { useEffect, useState } from "react";

export const ItemListContainer = ({ greeting }) => {
  const [articulos, setProductos] = useState([]);

  const Tiempo = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Articulos);
      }, 2000);
    });
  };

  useEffect(() => {
    Tiempo()
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className="main-Item container">
      <h2 className="h2-Item m-5 p-5">Menu</h2>
      <ItemList articulos={articulos} />
    </main>
  );
};
