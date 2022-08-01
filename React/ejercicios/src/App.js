import CrudAPI from "./components/CrudAPI/CrudAPI";
import CrudApp from "./components/CrudAPP/CrudApp";
import ContactForm from "./components/FormValidation/ContactForm";
import SelectsAnidados from "./components/SelectsAnidados/SelectsAnidados";
import SongSearch from "./components/Song Search/SongSearch";
import Modals from "./components/VentanaModal/Modals";

function App() {
  return (
    <div>
      <>
        <h1>Ejercicios con React</h1>
        <hr/>
        <Modals />
        <hr />
        <ContactForm />
        <hr />
        <SelectsAnidados />
        <hr />
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
