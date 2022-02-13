import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
/* import { Nosotros } from "./components/nosotros/nosotros"; */

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/inicio" element={<ItemListContainer />} />
        <Route path="/decada/:anios" element={<ItemListContainer />} />
        <Route path="/categoria/" element="Esta en proceso" />
        <Route path="/detail/:Id" element={<ItemDetailContainer />} />
        <Route path="*" element="ERROR 404" />
        {/* <Route path="/nosotros" element={<Nosotros />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
