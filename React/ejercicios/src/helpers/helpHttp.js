/**
 * Este helper lo usaremos para realizar peticiones FETCH
 */
export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    // cabecera por defecto
    const defaultHeader = {
      accept: "applications/json",
    };

    // este objeto sirve para abortar la petición
    const controller = new AbortController();
    options.signal = controller.signal;

    // comprobación de método, si no se especifica será GET
    options.method = options.method || "GET";
    // si no especifica cabecera, usaremos las por defecto
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    // body de la petición
    options.body = JSON.stringify(options.body) || false;
    //validación de body, no se puede pasar un body falso o vacío
    if (!options.body) delete options.body;
    //console.log(options);
    // establecemos un temporizador para que la petición no se quede
    // cargando eternamente
    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ha ocurrido un error.",
            })
      )
      .catch((err) => err);
  };
  //READ
  const get = (url, options = {}) => customFetch(url, options);
  //CREATE
  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };
  //UPDATE
  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };
  //DELETE
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
