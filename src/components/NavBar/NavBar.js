import img from "../../img.png";

export const NavBar = () => {
  return (
    <header className="header">
      <h1 className="titulo">Proyecto</h1>

      <nav className="menu-navegacion">
        <p className="enlaces-navbar">Inicio</p>
        <p className="enlaces-navbar">Contacto</p>
        <p className="enlaces-navbar">Productos</p>
        <img className="img" src={img} />
      </nav>
    </header>
  );
};
