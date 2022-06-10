const d = document;

// en esta variable almacenaremos
// los Estados que queramos controlar
const state = {
  todoList: [],
  nombre: "Nonameo",
};

// Template UI
const template = () => {
  if (state.todoList.length < 1) {
    return `<p><em>¡No hay tareas!</em></p>`;
  }
  let todos = state.todoList.map((item) => `<li>${item}</li>`).join("");
  return todos;
};

// Render UI
const render = () => {
  console.log(state);
  $list = d.getElementById("todo-list");
  if (!$list) return;
  $list.innerHTML = template();
};

// Actualizar reactivamente el State
/** Lo que hacemos es recorrer las llaves del array
 * y cambiar la que coincida con la pasada en obj*/
const setState = (obj) => {
  for (let key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
  }

  render();
};

d.addEventListener("DOMContentLoaded", render());

// Valores por defecto al State
setState({
  todoList: ["1", "2", "3"],
  nombre: "Pollos",
});

/** Estado Mutable porque permite modificar el estado
 * directamente creando una copia del objeto y
 * agregando otro elemento
 */
const items = state.todoList;
items.push("Tarea");

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();
  const $item = d.getElementById("todo-item");
  if (!$item) return;

  // Actualizamos el State y la UI
  // Insertamos el nuevo ítem en el array
  state.todoList.push($item.value);
  // renderizamos
  render();
  // Limpiar input
  $item.value = "";
  // Focalizar al item
  $item.focus();
});
