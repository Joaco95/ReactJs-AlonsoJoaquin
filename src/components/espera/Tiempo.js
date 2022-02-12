import { Articulos } from "../../articulos/articulos";

export const Tiempo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Articulos);
    }, 2000);
  });
};
