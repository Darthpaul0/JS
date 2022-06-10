import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  // esta variable recoge la ruta actual, esto es, #/...
  let { hash } = location;
  console.log(hash);

  $main.innerHTML = null;

  // si no hay hash o es #/, estamos en Home
  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        //console.log(posts);
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        $main.innerHTML = html;
      },
    });
    // carga de búsqueda
  } else if (hash.includes("#/search")) {
    // recuperamos el término de búsqueda del localStorage
    let query = localStorage.getItem("wpSearch");

    // validación para query
    if (!query) {
      d.querySelector(".loader").style.display = "none";
      return false;
    }
    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
        let html = "";
        // si no encuentra nada
        if (search.length === 0) {
          html = `<p class="error">No se han encontrado resultados para <mark>${query}</mark></p>`;
        } else {
          // muestra los resultados
          search.forEach((post) => {
            html += SearchCard(post);
          });
        }
        $main.innerHTML = html;
      },
    });
    // carga de contacto
  } else if (hash === "#/contacto") {
    $main.appendChild(ContactForm());
  } else {
    // cargamos el post anterior
    // console.log(`${api.POST}/${localStorage.getItem("wpPostId")}`);
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        //console.log(post);
        // cargamos el contenido del post en el main
        $main.innerHTML = Post(post);
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}
