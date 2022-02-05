import { CartWidget } from "../cartWidget/cartWidget";

export const NavBar = () => {
  return (
    <header className="header">
      <h1 className="titulo col-6">Proyecto</h1>

      <nav className="menu-navegacion row col-6">
        <p className="enlaces-navbar col-3">Inicio</p>
        <p className="enlaces-navbar col-3">Contacto</p>
        <p className="enlaces-navbar col-3">Productos</p>
        <div className="col-3">
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};
