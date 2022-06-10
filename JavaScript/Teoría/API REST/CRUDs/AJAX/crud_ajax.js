const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

/**Creamos una función que englobe los
 * pasos necesarios para realizar una petición AJAX
 */
const ajax = (options) => {
  /**
   * options es un objeto que contiene:
   * - la url
   * - qué metodo se ha usado
   * - success es una función donde ponemos nuestro código si la petición funciona
   * - error es una función donde ponemos nuestro código si hay un error
   * data lo usamos para especificar qué queremos
   */
  let { url, method, success, error, data } = options;
  // creamos el objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // le asignamos un listener
  xhr.addEventListener("readystatechange", (e) => {
    // VALIDACIONES
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let message = xhr.statusText || "Ha ocurrido un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  // abrimos la petición, usamos un operador de cortocircuito de tipo OR
  xhr.open(method || "GET", url);

  // le añadimos una cabecera
  xhr.setRequestHeader("content-type", "application/json; charset = utf-8");

  //mandamos la petición
  xhr.send(JSON.stringify(data));
};

/**Esta función obtiene todos los jugadores*/
const getAll = () => {
  // le pasamos la función AJAX con el objeto como petición
  ajax({
    method: "GET",
    url: "http://localhost:5000/jugadores",
    success: (res) => {
      console.log(res);
      // res trae la información de nuestra petición
      // para cada entrada de datos...
      res.forEach((el) => {
        // asignamos el nombre
        $template.querySelector(".name").textContent = el.nombre;
        $template.querySelector(".team").textContent = el.equipo;
        // le añadimos un data-attribute al boton
        $template.querySelector(".edit").dataset.name = el.nombre;
        $template.querySelector(".edit").dataset.team = el.equipo;
        $template.querySelector(".edit").dataset.id = el.id;
        $template.querySelector(".delete").dataset.id = el.id;
        // al trabajar con template hay que clonar
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      //guardamos en el body la tabla con la información
      $table.querySelector("tbody").appendChild($fragment);
    },
    error: (err) => {
      console.error(err);
      $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
    },
  });
};

// queremos que muestre la información al cargar el documento
d.addEventListener("DOMContentLoaded", getAll);

// la creación de un nuevo registro se produce al hacer click en enviar
d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      //POST - Create
      ajax({
        url: "http://localhost:5000/jugadores",
        method: "POST",
        // si hemos podido crear el jugador, recargamos la página
        success: (res) => location.reload(),
        error: (err) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          equipo: e.target.equipo.value,
        },
      });
    } else {
      //PUT - Update
      ajax({
        url: `http://localhost:5000/jugadores/${e.target.id.value}`,
        method: "PUT",
        // si hemos podido actualizar el jugador, recargamos la página
        success: (res) => location.reload(),
        error: () =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: { nombre: e.target.nombre.value, equipo: e.target.equipo.value },
      });
    }
  }
});

// edición y eliminación de un registro
d.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar jugador";
    $form.nombre.value = e.target.dataset.name;
    $form.equipo.value = e.target.dataset.team;
    $form.id.value = e.target.dataset.id;
  }

  if (e.target.matches(".delete")) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
    );

    if (isDelete) {
      //Delete - DELETE
      ajax({
        url: `http://localhost:5000/jugadores/${e.target.dataset.id}`,
        method: "DELETE",
        success: (res) => {
          location.reload();
        },
        error: (err) => {
          console.log(e.target.dataset.id);
          alert(err);
        },
      });
    }
  }
});
