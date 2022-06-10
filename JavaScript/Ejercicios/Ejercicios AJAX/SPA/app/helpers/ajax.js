// esta función la usaremos cada vez que necesitemos hacer
// una petición AJAX
export async function ajax(props) {
  let { url, cbSuccess } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      // mostramos el mensaje de error
      let message = err.statusText || "Error al acceder a la API";
      document.getElementById("main").innerHTML = `
      <div class="error">
        <p>Error ${err.status}: ${message}</p>
      </divc>
      `;

      // ocultamos el loader
      document.querySelector(".loader").style.display = "none";

      console.log(err);
    });
}
