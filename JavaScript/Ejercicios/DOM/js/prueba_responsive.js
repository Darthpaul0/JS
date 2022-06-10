const d = document;

/* A esta función le pasamos el id
del formulario donde introducimos los datos
de la presunta página responsive */
export default function responsiveTester(form) {
  // aquí almacenamos el id del formulario
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault(); // de esta forma el formulario no se procesa
      // cuando el formulario se procese, abrimos una ventana nueva
      // guardamos esa nueva ventana en la variable tester
      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth = ${$form.ancho.value}, innerHeight= ${$form.alto.value}`
      );
    }
  });

  // para cerrar la nueva ventana con el botón cerrar
  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) {
      tester.close();
    }
  });
}
