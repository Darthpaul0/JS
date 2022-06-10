const d = document;

// en esta variable almacenaremos
// los Estados que queramos controlar
// GLOBAL STATE
const state = {
  todoList: [],
  nombre: "Nonameo",
};

// Template UI
const template = () => {
  if (template.data.todoList.length < 1) {
    return `<p><em>¡No hay tareas!</em></p>`;
  }
  let todos = template.data.todoList.map((item) => `<li>${item}</li>`).join("");
  return todos;
};

// Agregar State al Template que genera el Componente de UI (Sate Local)
template.data = {
  todoList: [],
};

// Render UI
const render = () => {
  console.log("GLOBAL", state);
  console.log("LOCAL", template.data);
  $list = d.getElementById("todo-list");
  if (!$list) return;
  $list.innerHTML = template();
};

// Actualizar reactivamente el State
/** Lo que hacemos es recorrer las llaves del array
 * y cambiar la que coincida con la pasada en obj*/
const setState = (obj) => {
  for (let key in obj) {
    if (template.data.hasOwnProperty(key)) {
      template.data[key] = obj[key];
    }
  }

  render();
};

// Obtenemos una copia inmutable del State
/** Primero se convierte el objeto original a cadena de texto
 * y esa cadena de texto a un objeto, eliminando así cualquier
 * vinculación entre el objeto original y su copia
 */
const getState = () => JSON.parse(JSON.stringify(template.data));

d.addEventListener("DOMContentLoaded", render());

// Valores por defecto al State
setState({
  todoList: ["1", "2", "3"],
});

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
