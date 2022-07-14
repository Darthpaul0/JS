const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const getAll = async () => {
  try {
    // usando fetch podemos ahorrarnos la función ajax()
    // que tuvimos que crear para el CRUD con AJAX
    let res = await fetch("http://localhost:5000/jugadores"),
      json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    console.log(json);
    json.forEach((el) => {
      // asignamos el nombre
      $template.querySelector(".name").textContent = el.nombre;
      $template.querySelector(".team").textContent = el.equipo;
      // le añadimos un data-attribute al boton
      $template.querySelector(".edit").dataset.name = el.nombre;
      $template.querySelector(".edit").dataset.team = el.equipo;
      $template.querySelector(".edit").dataset.id = el.id;
      $template.querySelector(".delete").dataset.id = el.id;
      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ha ocurrido un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getAll);

// POST y PUT
d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      // POST - Create
      try {
        let options = {
            method: "POST",
            headers: {
              "content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              nombre: e.target.nombre.value,
              equipo: e.target.equipo.value,
            }),
          },
          res = await fetch("http://localhost:5000/jugadores", options),
          json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ha ocurrido un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
      // PUT - Update
    } else {
      try {
        let options = {
            method: "PUT",
            headers: {
              "content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              nombre: e.target.nombre.value,
              equipo: e.target.equipo.value,
            }),
          },
          res = await fetch(
            `http://localhost:5000/jugadores/${e.target.id.value}`,
            options
          ),
          json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ha ocurrido un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});

// DELETE
d.addEventListener("click", async (e) => {
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
      try {
        let options = {
            method: "DELETE",
            headers: {
              "content-type": "application/json; charset=utf-8",
            },
          },
          res = await fetch(
            `http://localhost:5000/jugadores/${e.target.dataset.id}`,
            options
          ),
          json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ha ocurrido un error";
        alert(`Error ${err.status}: ${message}`);
      }
    }
  }
});
