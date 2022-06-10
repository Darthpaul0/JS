const d = document,
  $shows = d.getElementById("shows"),
  $template = d.getElementById("show-template").content,
  $fragment = d.createDocumentFragment();

// el evento es la pulsación de una tecla
d.addEventListener("keypress", async (e) => {
  // si se produce en el input search
  if (e.target.matches("#search")) {
    // y la tecla es enter
    if (e.key === "Enter") {
      // ejecutamos la siguiente programación
      try {
        /**
         * mientras la API de TVMAZE nos devuelve la información
         * mostramos una imagen de carga
         */
        $shows.innerHTML = `<img class="loader" src="./loading.gif" alt="Cargando...">`;

        // variable que recoge la búsqueda
        let query = e.target.value.toLowerCase(),
          // este será el endpoint
          api = `http://api.tvmaze.com/search/shows?q=${query}`,
          // en esta variable esperamos la respuesta de la API
          res = await fetch(api),
          // aquí esperamos a que la respuesta se pase a JSON
          json = await res.json();

        console.log(api, res, json);

        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        if (json.length === 0) {
          $shows.innerHTML = `
          <h2>Lo sentimos, no encontramos <mark>${query}</mark></h2>
          `;
        } else {
          json.forEach((el) => {
            // nombre del programa
            $template.querySelector("h3").textContent = el.show.name;

            // descripción
            $template.querySelector("div").innerHTML = el.show.summary
              ? el.show.summary
              : "Sin descripción";

            // imagen del programa
            $template.querySelector("img").src = el.show.image
              ? el.show.image.medium
              : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
            $template.querySelector("img").alt = el.show.name;
            $template.querySelector("img").style.maxWidth = "100%";

            // enlace al programa
            $template.querySelector("a").href = el.show.url ? el.show.url : "#";
            $template.querySelector("a").target = el.show.url
              ? "_blank"
              : "_self";
            $template.querySelector("a").textContent = el.show.url
              ? "Ver más..."
              : "";

            // hacemos una copia del nodo $template
            let $clone = d.importNode($template, true);

            // agregamos la copia al fragmento
            $fragment.appendChild($clone);
          });
          /**
           * para evitar que salga el loader en los resultados
           * de búsqueda, igualamos $shows a nada
           */
          $shows.innerHTML = "";

          // insertamos el fragmento en $shows
          $shows.appendChild($fragment);
        }
      } catch (err) {
        console.log(err);
        let message = err.statusText || "Ha ocurrido un error";
        $shows.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      }
    }
  }
});
