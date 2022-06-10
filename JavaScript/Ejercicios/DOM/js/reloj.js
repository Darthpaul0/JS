const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;
  d.addEventListener("click", (e) => {
    //botón de inicio
    if (e.target.matches(btnPlay)) {
      //hacemos un intervalo que vaya aumentando cada segundo
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      //deshabilitamos el botón
      e.target.disabled = true;
    }

    //botón para detener el reloj
    if (e.target.matches(btnStop)) {
      //detenemos el setInterval anterior
      clearInterval(clockTempo);
      //borramos el div que mostraba el reloj
      d.querySelector(clock).innerHTML = null;
      //habilitamos el botón de inicio
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
export function alarm(sound, btnPlay, btnStop) {
  let alarmTempo;
  //creamos un elemento del DOM con la etiqueta audio (por eso lleva $)
  const $alarm = d.createElement("audio");
  //le pasamos el parámetro sound al atributo src de audio
  $alarm.src = sound;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 2000);

      //deshabilitamos el botón
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      //detenemos el setTimeout
      clearTimeout(alarmTempo);
      //no hay un método stop, hay que pararlo y luego ponerlo a 0 para que empiece desde el principio
      $alarm.pause();
      $alarm.currentTime = 0;
      //volvemos a habilitar el botón de inicio
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
