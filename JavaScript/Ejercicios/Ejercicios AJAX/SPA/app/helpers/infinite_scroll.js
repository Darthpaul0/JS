import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export async function infiniteScroll() {
  const d = document,
    w = window;

  // recuperamos el contenido de localStorage
  let query = localStorage.getItem("wpSearch"),
    // ruta actual
    apiURL,
    // componente actual - Higher Order Component
    Component;

  w.addEventListener("scroll", async (e) => {
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
      { hash } = w.location;

    //console.log(scrollTop, clientHeight, scrollHeight, hash);

    if (scrollTop + clientHeight >= scrollHeight) {
      // pasamos de página
      api.page++;

      //estamos en Home
      if (!hash || hash === "#/") {
        // pasamos a la siguiente página
        apiURL = `${api.POSTS}&page=${api.page}`;
        Component = PostCard;
        // Estamos en Buscar
      } else if (hash.includes("#/search")) {
        apiURL = `${api.SEARCH}${query}&page=${api.page}`;
        Component = SearchCard;
      } else {
        return false;
      }

      d.querySelector(".loader").style.display = "block";

      // hacemos la petición
      await ajax({
        url: apiURL,
        cbSuccess: (posts) => {
          //console.log(posts);
          let html = "";
          posts.forEach((post) => {
            html += Component(post);
          });
          // añadimos el contenido cargado al final
          d.getElementById("main").insertAdjacentHTML("beforeend", html);
          d.querySelector(".loader").style.display = "none";
        },
      });
    }
  });
}
