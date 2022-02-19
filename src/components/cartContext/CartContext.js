import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvide = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addItem = (item) => {
    setCarrito([...carrito, item]);
  };

  const addItemQuantity = () => {
    return carrito.reduce((item, art) => item + art.cantidad, 0);
  };

  const addItemTotal = () => {
    return carrito.reduce((item, art) => item + art.cantidad * art.precio, 0);
  };

  const removeItem = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const clear = () => {
    setCarrito([]);
  };

  const isInCart = (id) => {
    console.log(id);
    return carrito.some((art) => art.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        addItem,
        addItemQuantity,
        addItemTotal,
        removeItem,
        clear,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
