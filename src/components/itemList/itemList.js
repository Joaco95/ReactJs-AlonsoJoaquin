import { Item } from "../Item/Item";

export const ItemList = ({ articulos }) => {
  return (
    <>
      <h1 className="container item-h1 m-3">Articulos</h1>

      <div className="col-3">
        {articulos.map((el) => (
          <Item key={el.id} {...el} />
        ))}
      </div>
    </>
  );
};
