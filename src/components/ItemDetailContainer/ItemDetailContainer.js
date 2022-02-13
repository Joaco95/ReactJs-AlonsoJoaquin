import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tiempo } from "../espera/Tiempo";

export const ItemDetailContainer = () => {
  const [esperar, setLoading] = useState(false);
  const [item, setItem] = useState(null);

  const { Id } = useParams();

  console.log(Id);
  console.log(item);

  useEffect(() => {
    setLoading(true);

    Tiempo()
      .then((res) => {
        console.log(res);
        const devuelve = res.find((el) => el.id === Id);
        console.log(devuelve);
        setItem(devuelve);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="">
      {esperar ? <h2>Cargando...</h2> : <ItemDetail {...item} />}
    </div>
  );
};
