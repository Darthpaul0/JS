const d = document;
//variables que representan el movimiento de la pelota
let x = 0,
  y = 0;

//función para mover la pelota
//le pasamos el evento, el selector de la pelota
//y el selector del escenario
export function moveBall(e, ball, stage) {
  //almacenamos los selectores en variables
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage);

  /*Creamos variables que recojan las dimensiones
    de la pelota y el escenario, necesario para evitar
    colisiones*/
  const limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  //con este switch seleccionamos cada caso
  switch (e.keyCode) {
    //⬅ - ArrowLeft
    case 37:
      /*Con este método anulamos las funciones
        asignadas por defecto a la tecla */
      //comprobamos que no rebasa el límite izquierdo
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    //⬆ - ArrowUp
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    //➡ - ArrowRight
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    //⬇ - ArrowDown
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  //con esta propiedad CSS hacemos que se mueva la pelota
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  //alerta para cuando pulsemos ALT+A
  if (e.key === "a" && e.altKey) {
    alert("Has lanzado una alerta con el teclado");
  }
  //alerta para cuando pulsemos ALT+C
  if (e.key === "c" && e.altKey) {
    confirm("Has lanzado una confirmación con el teclado");
  }
  //alerta para cuando pulsemos ALT+P
  if (e.key === "p" && e.altKey) {
    prompt("Has lanzado un aviso con el teclado");
  }
}
