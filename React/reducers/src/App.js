import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import CrudAPI from "./components/CRUD API/CrudAPI";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr/>
      <CrudAPI/>
      <hr />
      <ShoppingCart />
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador />
      <hr />
    </div>
  );
}

export default App;
