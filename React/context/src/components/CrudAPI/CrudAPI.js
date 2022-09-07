import { useContext } from "react";
import CrudContext from "../../context/CrudContext";
import CrudForm from "../CrudAPP/CrudForm";
import CrudTable from "../CrudAPP/CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudAPI = () => {
  const { loading, error, db } = useContext(CrudContext);
  // Renderizado de la APP
  return (
    <div>
      <h2>CRUD API con Context API</h2>
      <article className="grid-1-2">
        <CrudForm />
        {/* filtramos que la variable loading sea true */}
        {loading && <Loader />}
        {/* si hay un error, mostramos el mensaje de error */}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="red"
          />
        )}
        {/* filtramos que la bbdd no sea null */}
        {db && <CrudTable />}
      </article>
    </div>
  );
};

export default CrudAPI;
