/**Este es un script que permite simular la inclusión de
 * archivos html en otros html usando Javascript.
 * Lo que hace es buscar los elementos que tengan un atributo
 * específico y los inserta en el HTML
 */
document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = (el, url) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        /**Al usar outerHTML lo que hacemos es reemplazar unas
         * etiquetas por otras. Si hubiéramos usado inner,
         * habría dentro las nuevas etiquetas
         */
        el.outerHTML = xhr.responseText;
      } else {
        let message =
          xhr.statusText ||
          "Error al cargar el archivo. Asegúrate que estás realizando una petición HTTP o HTTPS";
        el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
      }
    });
    xhr.open("GET", url);
    xhr.setRequestHeader("content-type", "text/html; charset=utf-8");
    xhr.send();
  };
  document.querySelectorAll("[data-include]").forEach((el) => {
    includeHTML(el, el.getAttribute("data-include"));
  });
});
