let d = document;
export default function countdown(id, limitDate, finalMessage) {
  //almacenamos en variables el objeto "countdown" y la fecha
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    //cogemos la fecha de hoy
    let now = new Date().getTime(),
      //restamos la fecha límite y la de hoy
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      //utilizamos el "0" para convertir el resultado a string, y la propiedad slice -2
      //para que conserve únicamente los dos primeros números
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    //mostramos la cuenta atrás en el html
    $countdown.innerHTML = `<h3>Faltan ${days} días ${hours} horas ${minutes} minutos y ${seconds} segundos</h3>`;

    //cuando llegue al límite...
    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
