import React, { useState } from "react";
import CrudForm from "../CrudAPP/CrudForm";
import CrudTable from "../CrudAPP/CrudTable";

const CrudAPI = () => {
  const [db, setDb] = useState([]);

  // con esto determinaremos qué operación hay que hacer en base al State
  const [dataToEdit, setDataToEdit] = useState(null);

  // función para crear un registro
  const createData = (data) => {
    // creamos un id único
    data.id = Date.now();
    // asignamos el nuevo valor a db
    setDb([...db, data]);
  };

  // función para modificar un registro
  const updateData = (data) => {
    // miramos en la base de datos si algún registro tiene esa id,
    // y en ese caso reemplazamos la información
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  // función para eliminar un registro
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Seguro que quieres eliminar al jugador con id:'${id}?'`
    );

    if (isDelete) {
      // creamos un nuevo array con todos los id menos el eliminado
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudAPI;
