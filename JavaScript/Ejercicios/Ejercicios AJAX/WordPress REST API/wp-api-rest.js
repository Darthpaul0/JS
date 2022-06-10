const d = document,
  w = window,
  $site = d.getElementById("site"),
  $posts = d.getElementById("posts"),
  $template = d.getElementById("post-template").content,
  $loader = d.querySelector(".loader"),
  $fragment = d.createDocumentFragment(),
  
  // endpoints
  DOMAIN = "https://garajehermetico.com",
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/posts?_embed`,
  PAGES = `${API_WP}/pages`,
  CATEGORIES = `${API_WP}/categories`;

// variables para paginación
let page = 1,
  perPage = 5;

// función para recoger la información del sitio
function getSiteData() {
  fetch(`${SITE}`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      $site.innerHTML = `
      <h2>
      <a href="${json.url}" target="_blank">${json.name}</a>
      </h2>
      <p>${json.description}</p>
      <p>${json.timezone_string}</p>
      `;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText | "Ha ocurrido un error";
      $site.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    });
}
// función para recoger los Posts
function getPosts() {
  $loader.style.display = "block";
  fetch(`${POSTS}&page=${page}&per_page=${perPage}`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);

      // cada elemento representa un post
      json.forEach((el) => {
        // variables auxiliares
        let categories = "",
          tags = "";

        // almacenamos las categorías y las etiquetas en variables por comodidad
        el._embedded["wp:term"][0].forEach(
          (el) => (categories += `<li>${el.name}</li>`)
        );
        el._embedded["wp:term"][1].forEach(
          (el) => (tags += `<li>${el.name}</li>`)
        );

        // título
        $template.querySelector(".post-image").src = el._embedded[
          "wp:featuredmedia"
        ]
          ? el._embedded["wp:featuredmedia"][0].source_url
          : "";
        // imagen
        $template.querySelector(".post-image").alt = el.title.rendered;
        // títutlo
        $template.querySelector(".post-title").innerHTML = el.title.rendered;
        // fecha
        $template.querySelector(".post-date").innerHTML = new Date(
          el.date
        ).toLocaleDateString();
        // link
        $template.querySelector(".post-link").href = el.link;
        // resumen
        $template.querySelector(".post-excerpt").innerHTML =
          el.excerpt.rendered.replace("[&hellip;]", "...");
        // categorías
        $template.querySelector(".post-categories").innerHTML = `
        <p>Categorías</p>
        <ul>${categories}</ul>
        `;

        // Etiquetas
        $template.querySelector(".post-tags").innerHTML = `
        <p>Etiquetas</p>
        <ul>${tags}</ul>
        `;

        // contenido
        $template.querySelector(".post-content > article").innerHTML =
          el.content.ren;

        let clone = d.importNode($template, true);
        $fragment.appendChild(clone);
      });

      $posts.appendChild($fragment);
      $loader.style.display = "none";
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText | "Ha ocurrido un error";
      $posts.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      $loader.style.display = "none";
    });
}

// Evento para cargar las funciones anteriores
d.addEventListener("DOMContentLoaded", (e) => {
  getSiteData();
  getPosts();
});

// Evento para el scroll infinito
w.addEventListener("scroll", (e) => {
  // aprovechamos la técnica de la destructuración para asignar variables
  // scrollTop nos dice cuántos píxeles nos hemos alejado del comienzo
  // clientHeight es igual a la altura de la ventana del cliente
  // scrollHeight muestra el scroll máximo que podemos hacer
  const { scrollTop, clientHeight, scrollHeight } = d.documentElement;

  // cargaremos más post cuando scrollTop + clientHeight >= a scrollHeight
  if (scrollTop + clientHeight >= scrollHeight) {
    // llamamos a la siguiente página
    page++;
    // invocamos la función getPosts() con la página nueva
    getPosts();
  }
});
