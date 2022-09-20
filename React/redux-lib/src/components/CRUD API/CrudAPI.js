import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAction, deleteAction, noAction, readAllAction, updateAction } from "../../actions/crudActions";
import { helpHttp } from "../../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudAPI = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  // detecta si queremos crear o actualizar un dato
  const [dataToEdit, setDataToEdit] = useState(null);

  // para mostrar errores
  const [error, setError] = useState(null);

  // para mostrar el loader
  const [loading, setLoading] = useState(false);

  // variable que usaremos para llamar al helper
  let api = helpHttp();

  // endpoint
  let url = `http://localhost:5000/jugadores`;

  // usamos este useEffect para hacer la petición fetch
  useEffect(() => {
    // actualizamos la variable loading a true
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          //setDb(res);
          dispatch(readAllAction(res));
          // si no hay errores
          setError(null);
        } else {
          //setDb(null);
          dispatch(noAction());
          setError(res);
        }
        // volvemos a ponerlo en false una vez hemos cumplido la promesa
        setLoading(false);
      });
  }, [url, dispatch]);

  // función para crear un registro - POST
  const createData = (data) => {
    // creamos un id único
    data.id = Date.now();

    /**
     * Ejecutamos el método POST de api y le pasamos la url y los datos
     * hay que especificar el tipo de datos que le vamos a pasar
     */
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      // console.log(res);
      // si no hay errores, actualizamos la base de datos
      if (!res.err) {
        //setDb([...db, res]);
        dispatch(createAction(res));
      } else {
        setError(res);
      }
    });

    // asignamos el nuevo valor a db
    //setDb([...db, data]);
  };

  // función para modificar un registro -- PUT
  const updateData = (data) => {
    // recuperamos el endpoint correspondiente al registro
    let endpoint = `${url}/${data.id}`;

    /**
     * Para actualizar un registro usaremos PUT
     */
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      // console.log(res);
      // si no hay errores, actualizamos la base de datos
      if (!res.err) {
        // miramos en la base de datos si algún registro tiene esa id,
        // y en ese caso reemplazamos la información
        // let newData = db.map((el) => (el.id === data.id ? data : el));
        //setDb(newData);
        dispatch(updateAction(res));
      } else {
        setError(res);
      }
    });
  };

  // función para eliminar un registro -- DELETE
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Seguro que quieres eliminar al jugador con id:'${id}?'`
    );

    if (isDelete) {
      // recuperamos el endpoint correspondiente al registro
      let endpoint = `${url}/${id}`;

      /**
       * Para eliminar un registro usaremos DELETE
       */
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        // console.log(res);
        // si no hay errores, actualizamos la base de datos
        if (!res.err) {
          // miramos en la base de datos si algún registro tiene esa id,
          // y en ese caso lo borramos
          // creamos un nuevo array con todos los id menos el eliminado
          // let newData = db.filter((el) => el.id !== id);
          //setDb(newData);
          dispatch(deleteAction(id));
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  // Renderizado de la APP
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
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudAPI;
