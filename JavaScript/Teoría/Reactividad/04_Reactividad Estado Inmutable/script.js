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

// Obtenemos una copia inmutable del State
/** Primero se convierte el objeto original a cadena de texto
 * y esa cadena de texto a un objeto, eliminando así cualquier
 * vinculación entre el objeto original y su copia
 */
const getState = () => JSON.parse(JSON.stringify(state));

d.addEventListener("DOMContentLoaded", render());

// Valores por defecto al State
setState({
  todoList: ["1", "2", "3", "4"],
  nombre: "Tomás Fajero",
});

/** Estado INMUTABLE porque NO permite modificar el estado
 * directamente creando una copia del objeto y
 * agregando otro elemento
 */
const items = getState();
items.todoList.push("Tarea");

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();
  const $item = d.getElementById("todo-item");
  if (!$item) return;

  // Actualizamos el State reactivamente y la UI
  const lastState = getState();
  
  // Insertamos el nuevo ítem en el array
  lastState.todoList.push($item.value);
  setState({ todoList: lastState.todoList });
  
  // Limpiar input
  $item.value = "";
  // Focalizar al item
  $item.focus();
});
