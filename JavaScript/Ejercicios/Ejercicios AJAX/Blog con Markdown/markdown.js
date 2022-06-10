const d = document,
  $main = d.querySelector("main");

fetch("./markdown.md")
  .then((res) => (res.ok ? res.text() : Promise.reject(res)))
  .then((text) => {
    console.log(text);
    /** Usamos la librería showdown.js para poder mostrar el
     * archivo .md como html
     */
    $main.innerHTML = new showdown.Converter().makeHtml(text);
  })
  .catch((err) => {
    console.log(err);
    let message = err.statusText || "Ha ocurrido un error";
    $main.innerHTML = `Error ${err.status}: ${message}`;
  });
