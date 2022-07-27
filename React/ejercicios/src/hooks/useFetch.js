// Hook personalizado para las peticiones fetch a las APIs

import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // recogemos la información de la API
  const [data, setData] = useState(null);
  // recogemos errores
  const [error, setError] = useState(null);
  // recogemos el estado actual de la petición según el loader
  const [loading, setLoading] = useState(false);

  // aquí hacemos la petición fetch
  useEffect(() => {
    // con este objeto controlamos errores en la petición fetch
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        /** Si la petición da error
         * Creamos un objeto error
         * usamos un operador de cortocircuito para manejar errores
         */
        if (!res.ok) {
          let err = new Error("Error en la petición fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText = "Ha ocurrido un error";
          // si hay error, lo lanzamos al catch
          throw err;
        }
        // si no hay errores, convertimos la respuesta a formato json
        const json = await res.json();

        // validación necesaria para el objeto abortController
        // si todo va bien, actualizamos el valor de data y de error
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        // independientemente de que haya o no errores, dejamos de mostrar el loader
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    
    fetchData();

    return () => abortController.abort;
  }, [url]);

  return { data, error, loading };
};
