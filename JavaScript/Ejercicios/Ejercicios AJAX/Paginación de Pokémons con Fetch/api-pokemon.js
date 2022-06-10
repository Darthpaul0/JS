const d = document,
  $main = d.querySelector("main"),
  $links = d.querySelector(".links");

let pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
/** función para cargar los Pokémons */
async function loadPokemons(url) {
  try {
    /** ponemos un loader para que el usuario
     * sepa que estamos cargando los pokémons */
    $main.innerHTML = `<img class="loader" src="./loading.gif" alt=Cargando...>`;

    // esperamos a recibir la respuesta de la API
    let res = await fetch(url),
      // la convertimos a formato json
      json = await res.json(),
      // en esta variable es donde almacenamos la información,
      // y donde se mostrarán los pokémons (por eso el $)
      $template = "",
      // variables para ejecutar la paginación
      $prevLink,
      $nextLink;

    //console.log(json);

    // validamos
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    /** vamos a iterar sobre los diferentes pokémon
     * los pokémons vienen en una array llamado results
     */
    for (let i = 0; i < json.results.length; i++) {
      try {
        /** la variable pasada a fetch contiene la
         * información de la url de cada pokémon
         */
        let res = await fetch(json.results[i].url),
          // en esta variable se almacena el pokémon
          pokemon = await res.json();

        //validación
        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        // si no hay errores, concatenamos para mostrar los pokémons
        /** la imagen la saca de pokemon.sprites.front_default
         * aunque hay varias disponibles
         */
        $template += `
        <figure>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"> 
            <figcaption>${pokemon.name}</figcaption>
        </figure>
        `;
      } catch (err) {
        let message = err.statusText || "Ha ocurrido un error.";
        $template += `
        <figure>
        <figcaption>Error ${err.status}: ${message}</figcaption>
        </figure>
        `;
      }
    }

    // finalmente, cargamos en la etiqueta main el template
    $main.innerHTML = $template;

    // ahora vamos a poner los links para paginar
    // esto lo conseguimos haciendo uso de la pokeapi
    $prevLink = json.previous ? `<a href="${json.previous}">◀️</a>` : "";
    $nextLink = json.next ? `<a href="${json.next}">▶️</a>` : "";

    // añadimos los enlaces a la variable $links
    $links.innerHTML = $prevLink + "" + $nextLink;
  } catch (err) {
    let message = err.statusText || "Ha ocurrido un error.";
    $main.innerHTML = `<p>Error ${err.status}: ${message} </p>`;
  }
}
// delegación de eventos para la carga inicial de los pokémons
d.addEventListener("DOMContentLoaded", (e) => loadPokemons(pokeAPI));

// delegación de eventos para la paginación de los pokémons
d.addEventListener("click", (e) => {
  if (e.target.matches(".links a")) {
    e.preventDefault();
    // ejecutamos nuestra función para cargar pokémons
    loadPokemons(e.target.getAttribute("href"));
  }
});
