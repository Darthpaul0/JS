import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { infiniteScroll } from "./helpers/infinite_scroll.js";

export function App() {
  const $root = document.getElementById("root");

  // con esto evitamos que se duplique el contenido
  $root.innerHTML = null;

  // añadimos el componente Title
  $root.appendChild(Header());
  // añadimos el componente Posts
  $root.appendChild(Main());
  // añadimos el componente Loader
  $root.appendChild(Loader());

  // Router
  Router();

  // Scroll infinito
  infiniteScroll();
}
