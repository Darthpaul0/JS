const d = document;

const app = new Component({
  el: "#todo-list",
  data: {
    todoList: [],
  },
  template: function (props) {
    if (props.todoList.length < 1) {
      return `<p><em>¡No hay tareas!</em></p>`;
    }
    let todos = props.todoList.map((item) => `<li>${item}</li>`).join("");
    return todos;
  },
});

d.addEventListener("DOMContentLoaded", app.render());

// Valores por defecto al State
app.setState({
  todoList: ["1", "2", "3"],
});

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();
  const $item = d.getElementById("todo-item");
  if (!$item) return;

  // Actualizamos el State reactivamente y la UI
  const lastState = app.getState();

  // Insertamos el nuevo ítem en el array
  lastState.todoList.push($item.value);
  app.setState({ todoList: lastState.todoList });

  // Limpiar input
  $item.value = "";
  // Focalizar al item
  $item.focus();
});
