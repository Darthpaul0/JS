const d = document,
  w = window;

export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);
  w.addEventListener("scroll", (e) => {
    /*declaramos una variable que nos devuelve cuántos píxeles
    hemos hecho scroll. Declaramos dos opciones por si una de 
    ellas no resulta válida en el navegador*/
    let scrollTop = w.scrollY || d.documentElement.scrollTop;

    /*Le decimos que si el scroll supera los 600 px, 
    muestre el botón, eliminando la clase hidden */
    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({ behavior: "smooth", top: 0 });
    }
  });
}
