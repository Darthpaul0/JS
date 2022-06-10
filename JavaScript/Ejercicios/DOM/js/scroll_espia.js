const d = document;

export default function scrollSpy() {
  /**Capturamos todas las secciones de nuestra página */
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  /**Función callback que recibe las secciones como entries */
  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  /**Creamos un objeto de tipo IntersectionObserver
   * que recibe una función y unas entradas
   */
  const observer = new IntersectionObserver(cb, {
      /**De esta forma reducimos el área de interacción
       * del observador, evitando así que marque dos
       * secciones cada vez
       */
    //rootMargin: "-250px",
    /**Esta propiedad determina con qué porcentaje
     * de contenido se marcará el menú
     * Esta propiedad es mejor que la anterior
    */
    threshold: [0.5, 0.75]
  });
  $sections.forEach((el) => observer.observe(el));
}
