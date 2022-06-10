const d = document,
  $item = d.getElementById("todo-item"),
  $list = d.getElementById("todo-list");

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#todo-form")) return false;

  e.preventDefault();
  // Agregar a la lista
  let $li = d.createElement("li");
  $li.textContent = $item.value;
  $list.appendChild($li);

  // Limpiar input
  $item.value = "";
  // Focalizar al item
  $item.focus();
});
