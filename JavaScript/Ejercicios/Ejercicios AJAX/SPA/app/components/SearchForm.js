export function SearchForm() {
  const d = document,
    $form = document.createElement("form"),
    $input = document.createElement("input");

  $form.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Buscar";
  $input.autocomplete = "off";

  $form.appendChild($input);

  // con esto conseguimos conservar la última búsqueda del usuario
  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("wpSearch");
  }

  // creamos un evento para borrar la búsqueda del usuario 
  // del localStorage
  d.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
    if (!e.target.value) localStorage.removeItem("wpSearch");
  });

  d.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();
    // almacenamos la búsqueda del usuario en localStorage
    localStorage.setItem("wpSearch", e.target.search.value);
    // modificamos la URL
    location.hash = `#/search?search=${e.target.search.value}`;
  });
  return $form;
}
