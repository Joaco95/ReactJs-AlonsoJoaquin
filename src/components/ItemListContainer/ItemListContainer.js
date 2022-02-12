import { ItemList } from "../itemList/itemList";
import { useEffect, useState } from "react";
import img from "./esperar.jpg";
import { useParams } from "react-router-dom";
import { Tiempo } from "../espera/Tiempo";

export const ItemListContainer = () => {
  const [articulos, setProductos] = useState([]);
  const [espera, setLoading] = useState(false);

  const { años } = useParams();

  console.log(años);
  console.log(articulos);

  useEffect(() => {
    setLoading(true);

    Tiempo()
      .then((res) => {
        console.log(res);
        if (años) {
          const decada = res.find((el) => el.año === Number(años));
          console.log(decada);
          setProductos(decada);
        } else {
          setProductos(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [años]);
  return (
    <main className="main-Item container">
      <h2 className="h2-Item m-5 p-5">Menu</h2>
      <div>
        {espera ? <img src={img} /> : <ItemList articulos={articulos} />}
      </div>
    </main>
  );
};
