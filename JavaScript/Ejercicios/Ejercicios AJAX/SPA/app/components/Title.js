import api from "../helpers/wp_api.js";

export function Title() {
  // creamos el nodo H1
  const $h1 = document.createElement("h1");

  // modificamos su contenido con la información de la API
  $h1.innerHTML = `
    <a href="${api.DOMAIN}" target="_blank" rel="noopener">
    ${api.NAME.toUpperCase()}
    </a>
    `;

  // devolvemos el nodo
  return $h1;
}
