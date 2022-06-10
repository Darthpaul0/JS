const d = document;

// en esta variable almacenaremos
// los Estados que queramos controlar
const state = {
  todoList: [],
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

d.addEventListener("DOMContentLoaded", render());
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
