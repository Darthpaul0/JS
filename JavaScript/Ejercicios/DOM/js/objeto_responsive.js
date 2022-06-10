const d = document,
  w = window;

// En esta función le pasamos el id, la media querie (mq), y el contenido para móvil y escritorio
export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  // Almacenamos el punto de ruptura en una variable
  let breakpoint = w.matchMedia(mq);
  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };
  breakpoint.addListener(responsive);
  responsive(breakpoint);
}
