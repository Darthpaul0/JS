import CrudAPI  from "./components/CrudAPI/CrudAPI";
import CrudApp from "./components/CrudAPP/CrudApp";

function App() {
  return (
    <div>
      <>
        <h1>Ejercicios con React</h1>
        <CrudAPI />
        <hr />
        <CrudApp />
        <hr />
      </>
    </div>
  );
}

export default App;
