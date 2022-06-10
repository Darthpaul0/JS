import { App } from "./App.js";
import api from "./helpers/wp_api.js";

document.addEventListener("DOMContentLoaded", App);

// agregamos un evento a Window para emular el cambio de URL
window.addEventListener("hashchange", () => {
  // Cuando haya un cambio en el hash, hay que inicializar page a 1
  api.page = 1;
  App();
});
