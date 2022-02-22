import { ItemList } from "../itemList/itemList";
import { useEffect, useState } from "react";
import img from "./esperar.jpg";
import { useParams } from "react-router-dom";
import { Tiempo } from "../espera/Tiempo";

export const ItemListContainer = () => {
  const [articulos, setProductos] = useState([]);
  const [espera, setLoading] = useState(false);

  const { anios } = useParams();

  console.log(anios);
  console.log(articulos);

  useEffect(() => {
    setLoading(true);

    Tiempo()
      .then((res) => {
        if (anios) {
          const decada = res.filter((el) => el.año === anios);
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
  }, [anios]);
  return (
    <main className="main-Item container">
      <h2 className="h2-Item m-5 p-5">Menu</h2>
      <div>
        {espera ? <img src={img} /> : <ItemList articulos={articulos} />}
      </div>
    </main>
  );
};
