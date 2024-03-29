import Basicos from "./components/Basicos";
import CrudAPI from "./components/CrudAPI/CrudAPI";
import SongSearch from "./components/Song Search/SongSearch";

function App() {
  return (
    <div>
      <h1>REACT ROUTER</h1>
      <a
        href="https://reactrouter.com/en/v6.3.0/getting-started/installation"
        target="_blank"
        rel="noreferrer"
      >
        Documentación oficial
      </a>
      <hr />
      <SongSearch />
      <hr />
      <Basicos />
      <hr />
      <CrudAPI />
    </div>
  );
}

export default App;
