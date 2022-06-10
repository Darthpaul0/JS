const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $slides = d.querySelectorAll(".slider-slide");

  // variable para contar slides y hacer el carrusel infinito
  let i = 0;
  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      // evitamos que siga el enlace
      e.preventDefault();
      // quitamos la clase active para que deje de mostrarse
      $slides[i].classList.remove("active");
      // reducimos en 1 el valor de i para ir a la diapositiva anterior
      i--;

      // si i es menor que 1, hay que volver a la última diapositiva
      if (i < 0) {
        i = $slides.length - 1;
      }

      // asignamos la clase active a la diapositiva anterior
      $slides[i].classList.add("active");
    }

    if (e.target === $nextBtn) {
        // evitamos que siga el enlace
        e.preventDefault();
        // quitamos la clase active para que deje de mostrarse
        $slides[i].classList.remove("active");
        // aumentamos en 1 el valor de i para ir a la diapositiva siguiente
        i++;
  
        // si i es mayor que el número de diapositivas, hay que volver a la primera diapositiva
        if (i >= $slides.length) {
          i = 0;
        }
  
        // asignamos la clase active a la diapositiva anterior
        $slides[i].classList.add("active");
      }
  });
}
