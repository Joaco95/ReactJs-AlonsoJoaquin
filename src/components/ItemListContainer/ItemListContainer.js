import { ItemList } from "../itemList/itemList";
import { Articulos } from "../../articulos/articulos";
import { useEffect, useState } from "react";
import img from "./esperar.jpg";

export const ItemListContainer = ({ greeting }) => {
  const [articulos, setArticulos] = useState([]);
  const [espera, setEspera] = useState(false);

  const Tiempo = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Articulos);
      }, 2000);
    });
  };

  useEffect(() => {
    setEspera(true);
    Tiempo()
      .then((res) => {
        setArticulos(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setEspera(false);
      });
  }, []);
  return (
    <main className="main-Item container">
      <h2 className="h2-Item m-5 p-5">Menu</h2>
      <div>
        {espera ? <img src={img} /> : <ItemList articulos={articulos} />}
      </div>
    </main>
  );
};
