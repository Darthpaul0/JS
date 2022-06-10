/** Clase 106 >>> Objeto XMLHttpRequest */
(() => {
  /**Se siguen estos 4 pasos */
  // 1.- Instanciar un objeto de tipo XMLHttpRequest
  const xhr = new XMLHttpRequest(),
    // esto lo hacemos para mostrarlo en pantalla
    $xhr = document.getElementById("xhr"),
    // insertando un fragment mejoramos el rendimiento
    $fragment = document.createDocumentFragment();

  // 2.- Asignarle los eventos correspondientes
  xhr.addEventListener("readystatechange", (e) => {
    // mientras que el estado no sea 4 (esto es, complete), no se muestra nada
    if (xhr.readyState !== 4) return;
    //console.log(xhr);

    /**Con esta validación solo aceptamos peticiones satisfactorias */
    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("OK");
      //console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText);
      //console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} >>> ${el.email} >>> ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      //console.log("Error");
      let message = xhr.statusText || "Algo ha ido mal.";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  // 3.- Abrir la petición, estableciendo el método y el recurso
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  // 4.- Enviar la petición
  xhr.send();
})();

/** Clase 107 >>> API Fetch */
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  // El método fetch funciona con promesas
  // Si la promesa se cumple, actúa then
  // Si no, entramos en catch
  // El método finally se ejecutará siempre
  fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => {
    //   console.log(res);
    //   // utilizamos este método para convertir texto a json
    //   /**La validación permite a la promesa saber que en caso
    //    * de error debe ejecutar el método catch
    //    */
    //   return res.ok ? res.json() : Promise.reject(res);
    // })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      // console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} >>> ${el.email} >>> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      let message = err.statusText || "Algo ha ido mal.";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Este mensaje se ejecutará siempre");
    });
})();

/** Clase 108 >>> API Fetch + Async-Await */
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      /**Utilizando funciones asíncronas podemos ahorrarnos
       * usar muchas promesas (then hell), quedando el código
       * más limpio y legible
       */
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();
      //console.log(res, json);

      // if (!res.ok) throw new Error("Ha ocurrido un error");
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} >>> ${el.email} >>> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      //console.log("Error", err);
      let message = err.statusText || "Algo ha ido mal.";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      //console.log("Try catch");
    }
  }
  getData();
})();

/** Clase 109 >>> Librería Axios */
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();
  /** Axios trabaja con promesas */
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      let json = res.data;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} >>> ${el.email} >>> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err.response);
      let message = err.response.statusText || "Algo ha ido mal.";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Esto se ejecuta siempre.");
    });
})();

/** Clase 110 >>> Librería Axios + Async-Await */
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;
      //console.log(res, json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} >>> ${el.email} >>> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      let message = err.response.statusText || "Algo ha ido mal.";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.log("Try catch");
    }
  }
  getData();
})();
