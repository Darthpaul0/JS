const d = document,
  ls = localStorage;

export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectores = d.querySelectorAll("[data-dark]");

  /*
Almacenamos los emojis en variables para poder cambiarlos según 
estemos usando el tema oscuro o no
*/
  let moon = "🌙",
    sun = "☀️";

  // creamos funciones para cada uno de los modos, claro y oscuro
  const lightMode = () => {
    // eliminamos el data-attribute utilizado para generar el tema oscuro
    $selectores.forEach((el) => el.classList.remove(classDark));
    // cambiamos el sol por una luna
    $themeBtn.textContent = moon;
    // tenemos que igualar el valor de la variable ls a light
    ls.setItem("theme","light");
  };
  const darkMode = () => {
    // añadimos el data-attribute para generar el tema oscuro
    $selectores.forEach((el) => el.classList.add(classDark));
    // cambiamos la luna por un sol
    $themeBtn.textContent = sun;
    // tenemos que igualar el valor de la variable ls a dark
    ls.setItem("theme","dark");
  };

  d.addEventListener("click", (e) => {
    // si ha hecho click en el botón
    if (e.target.matches(btn)) {
      // si el botón tenía como contenido la luna
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    /*Al cargar la página, preguntamos si existe una variable
    llamada theme en el localStorage. Si no existe, le decimos
    que esa variable es igual a light*/
    if (ls.getItem("theme") === null) {
      ls.setItem("theme","light");
    }
    // si el tema está puesto en claro, ejecutamos nuestra función lightMode
    if (ls.getItem("theme") === "light") {
      lightMode();
    }
    // si el tema está puesto en oscuro, ejecutamos nuestra función darkMode
    if (ls.getItem("theme") === "dark") {
      darkMode();
    }
  });
}
