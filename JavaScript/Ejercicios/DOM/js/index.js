import scrollTopButton from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./countdown.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import searchFilter from "./filtro_busquedas.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import speechReader from "./narrador.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_espia.js";
import draw from "./sorteo.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import contactFormValidation from "./validaciones_formulario.js";
import smartVideo from "./video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm(
    "assets/Pink Floyd - Time (2011 Remastered).mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );
  countdown("countdown", "December 11, 2022 15:15:15", "¡Feliz cumpleaños!");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    // Contenido móvil
    `<a href = "https://youtu.be/i1ugYz0r4Xo" target = "_blank" rel = "noopener">Ver vídeo</a>`,
    // Contenido escritorio
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/i1ugYz0r4Xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href = "https://goo.gl/maps/tw8R9UVGREApb7488" target = "_blank" rel = "noopener">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321684.10426747083!2d6.687134120943371!3d50.957800255502406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf259169ab2fe5%3A0x42760fc4a2a77f0!2sColonia%2C%20Alemania!5e0!3m2!1ses!2ses!4v1646653423348!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidation();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

// sacamos la función fuera del evento DOMContentLoaded para
// evitar que entre en conflicto con el mismo evento, esto es,
// no podemos almacenar una función que ejecute el mismo evento
// que la función padre
darkTheme(".dark-theme-btn", "dark-mode");

// funcion que muestra el estado de nuestra conexión
networkStatus();
speechReader();
