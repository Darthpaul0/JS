const d = document;
export default function contactFormValidation() {
  // almacenamos el formulario
  const $form = d.querySelector(".contact-form"),
    // almacenamos los inputs
    $inputs = d.querySelectorAll(".contact-form [required]");

  // para cada input required
  $inputs.forEach((input) => {
    // creamos un span
    const $span = d.createElement("span");
    // le asignamos una id igual a su nombre
    $span.id = input.name;
    // le insertamos el texto igual al title del input
    $span.textContent = input.title;
    // le añadimos las clases css necesarias
    $span.classList.add("contact-form-error", "none");
    // insertamos el span detrás del input
    input.insertAdjacentElement("afterend", $span);
  });

  /* vamos a validar cada campo del formulario 
  conforme el usuario escriba */
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        /**Le decimos que pattern debe recoger el valor que
         * establecimos en el data-attribute del html,
         * y usando un operador de cortocircuito aseguramos
         * que no es null
         */
        pattern = $input.pattern || $input.dataset.pattern;
      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? // si cumple con la regex, añadimos la clase "is-active"
            d.getElementById($input.name).classList.add("is-active")
          : // si no cumple
            d.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    // evitamos que procese la petición
    //e.preventDefault();
    alert("Enviando formulario");

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    // simulación de envío a falta de conocer AJAX
    /**Muestra una imagen de carga que desaparece
     * pasados 3 segundos muestra un mensaje
     */
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
}
