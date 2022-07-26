import CrudAPI from "./components/CrudAPI/CrudAPI";
import CrudApp from "./components/CrudAPP/CrudApp";
import SongSearch from "./components/Song Search/SongSearch";

function App() {
  return (
    <div>
      <>
        <h1>Ejercicios con React</h1>
        <SongSearch />
        <hr />
        <CrudAPI />
        <hr />
        <CrudApp />
        <hr />
      </>
    </div>
  );
}

export default App;
