const d = document,
  $main = d.querySelector("main");

// esta función se va a encargar de pedir contenido HTML
/**Le pasamos un objeto con:
 * url del archivo
 * función success si carga bien
 * función error por si va mal
 */
const getHTML = (options) => {
  // le pasamos la url, success es una función si ha tenido éxito y
  // error otra para manejo de errores
  // no se necesita pasarle method porque aquí siempre estaremos
  // usando GET, estamos obteniendo datos de un archivo HTML
  // dentro del mismo servidor
  let { url, success, error } = options;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let html = xhr.responseText;
      success(html);
    } else {
      let message = xhr.statusText || "Ha ocurrido un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open("GET", url);
  xhr.setRequestHeader("content-type", "text/html; charset=utf-8");
  xhr.send();
};

/**Necesitamos que se ejecute al cargar la página
 * y al hacer click en los enlaces
 */
d.addEventListener("DOMContentLoaded", (e) => {
  getHTML({
    url: "../assets/home.html",
    success: (html) => ($main.innerHTML = html),
    error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
  });
});

d.addEventListener("click", e => {
    // si hago click en un enlace del menú
    if(e.target.matches(".menu a")){
        // eliminamos el comportamiento por defecto
        e.preventDefault();
        // ejecutamos la función getHTML
        getHTML({
            url: e.target.href,
            success: (html) => ($main.innerHTML = html),
            error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
          });
    }
})