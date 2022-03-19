import { ItemList } from "../itemList/itemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../FireBase/firebase";

/* import { Tiempo } from "../espera/Tiempo"; */

export const ItemListContainer = () => {
  const [articulos, setProductos] = useState([]);
  const [espera, setLoading] = useState(false);

  const { anios } = useParams();

  /* console.log(anios);
  console.log(articulos); */

  useEffect(() => {
    setLoading(true);

    const referenciaDataBase = collection(db, "articulos");
    const categoria = anios
      ? query(referenciaDataBase, where("año", "==", anios))
      : referenciaDataBase;

    getDocs(categoria)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [anios]);

  /*  
   
   Promesa
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
      }); */

  return (
    <main className="main-Item container">
      <h2 className="h2-Item m-5 p-5">Menu</h2>
      <div>
        {espera ? <h2>esperar</h2> : <ItemList articulos={articulos} />}
      </div>
    </main>
  );
};
