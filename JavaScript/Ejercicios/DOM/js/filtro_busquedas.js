const d = document;

export default function searchFilter(input, selector) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      // añadimos este condicional para dejar de buscar
      if (e.key === "Escape") e.target.value = "";

      // para cada selector ejecutamos lo siguiente
      d.querySelectorAll(selector).forEach((el) =>
        /**Pasamos a minúsculas el contenido de la tarjeta
         * preguntamos si incluye el texto introducido en
         * el input
         */
        // si esto es verdad...
        el.textContent.toLowerCase().includes(e.target.value)
          ? // ...mostramos el contenido
            el.classList.remove("filter")
          : // ...ocultamos el contenido
            el.classList.add("filter")
      );
    }
  });
}
