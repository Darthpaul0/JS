const d = document,
  w = window,
  n = navigator;

export default function networkStatus() {
  // esta función nos dirá si estamos o no conectados
  const isOnLine = () => {
    // creamos un div
    const $div = d.createElement("div");
    if (n.onLine) {
      $div.textContent = "Conexión restablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      console.log(n.onLine);
      $div.textContent = "Conexión perdida";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }
    // de esta forma le decimos que debe aparecer antes del primer hijo
    d.body.insertAdjacentElement("afterbegin", $div);
    // establecemos un temporizador para borrar el mensaje
    // pasados dos segundos
    setTimeout(() => d.body.removeChild($div), 2000);
  };
  w.addEventListener("online", isOnLine());
  w.addEventListener("offline", isOnLine());
}
