import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../FireBase/firebase";

/* import { Tiempo } from "../espera/Tiempo"; */

export const ItemDetailContainer = () => {
  const [esperar, setLoading] = useState(false);
  const [item, setItem] = useState(null);

  const { Id } = useParams();

  useEffect(() => {
    setLoading(true);

    const dataBaseReferencia = doc(db, "articulos", Id);

    getDoc(dataBaseReferencia)
      .then((doc) => {
        console.log(doc.data());
        setItem({ id: doc.id, ...doc.data() });
      })
      .finally(() => {
        setLoading(false);
      });

    /*   Promesa  
    Tiempo()
      .then((res) => {
        console.log(res);
        const devuelve = res.find((el) => el.id === Id);
        console.log(devuelve);
        setItem(devuelve);
      })
      .finally(() => {
        setLoading(false);
      }); */
  }, []);

  return (
    <div className="">
      {esperar ? <h2>Cargando...</h2> : <ItemDetail {...item} />}
    </div>
  );
};
