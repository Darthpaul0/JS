/* eslint-disable no-throw-literal */
// Custom Hook para realizar peticiones asícronas con Fetch

import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // aquí pedimos la información
  const [data, setData] = useState(null);
  // aquí controlamos la petición
  const [isPending, setIsPending] = useState(true);
  // variable de error
  const [error, setError] = useState(null);

  // este useEffect se ejecuta cuando cambia la URL
  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        // comprobamos que no hay errores
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText
              ? "Ha ocurrido un error"
              : res.statusText,
          };
        }

        let data = await res.json();

        // actualizamos el estado
        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };
    getData(url);
  }, [url]);
  return { data, isPending, error };
};
