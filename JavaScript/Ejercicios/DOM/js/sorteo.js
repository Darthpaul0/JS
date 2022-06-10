const d = document;

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      // multiplicamos el número de jugadores por un número al azar
      random = Math.floor(Math.random() * $players.length),
      // el ganador será una posición del array $players
      winner = $players[random];

    return `El ganador es ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
    }
  });
}

/* ***** Función alternativa para hacer sorteos en RRSS ***** */
const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector),
    // multiplicamos el número de jugadores por un número al azar
    random = Math.floor(Math.random() * $players.length),
    // el ganador será una posición del array $players
    winner = $players[random];

  return `El ganador es ${winner.textContent}`;
};

/**Hay que inspeccionar el código de la RRSS y pasarle
 * a la función el selector correspondiente. 
 * Aquí un ejemplo para YouTube
 */
//getWinnerComment("ytd-comment-thread-renderer #author-text span");

