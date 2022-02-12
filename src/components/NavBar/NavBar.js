import { CartWidget } from "../cartWidget/cartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="titulo col-6">Proyecto</h1>
      </Link>
      <nav className="menu-navegacion row col-6">
        <Link to="/inicio" className="enlaces-navbar col-3">
          Inicio
        </Link>
        <Link to="/categoria" className="enlaces-navbar col-3">
          Categoria
        </Link>
        <Link to="/decada/2007" className="enlaces-navbar col-3">
          Decada
        </Link>

        <div className="col-3">
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};
