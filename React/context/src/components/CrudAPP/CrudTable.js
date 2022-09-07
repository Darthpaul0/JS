import { useContext } from "react";
import CrudContext from "../../context/CrudContext";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {
  // db:data significa que dentro del archivo db se llamará data, es un alias
  const { db: data } = useContext(CrudContext);
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Equipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => <CrudTableRow key={el.id} el={el} />)
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
