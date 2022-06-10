export function Main() {
  const $main = document.createElement("main");
  $main.id = "main";
  // validamos que el hash tenga #/search para mostrar
  // el contenido de otra forma
  if (!location.hash.includes("#/search")) {
    $main.classList.add("grid-fluid");
  }
  return $main;
}
