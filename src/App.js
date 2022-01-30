import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import "./styles/style.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="PRODUCTOS" />
    </div>
  );
}
//greeting="Prueba de titulo"
export default App;
