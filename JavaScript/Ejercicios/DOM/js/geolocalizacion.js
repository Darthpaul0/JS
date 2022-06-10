const d = document,
  n = navigator;

export default function getGeolocation(id) {
  /**En esta variable capturamos el div con el id
   * donde insertaremos la información de la
   * geolocalización
   */
  const $id = d.getElementById(id),
    // esta variable se la pasamos a la siguiente función
    options = {
      // activar precisión
      // depende del hardware
      enableHighAccuracy: true,
      // tiempo que espera una respuesta
      timeout: 5000,
      // para borrar la caché y que no tenga en cuenta lecturas
      // anteriores
      maximumAge: 0,
    };
  // si nos localiza, pasamos esta función
  const success = (position) => {
    // almacenamos en una variable las coordenadas recibidas
    let coords = position.coords;
    // vamos a mostrar una lista con las coordenadas y un enlace
    /** en el enlace a Google Maps, le pasamos a google
     * las coordenadas y el zoom, que se corresponde con el último parámetro 1z.
     * Podemos llegar a 21z, que sería el zoom máximo */
    $id.innerHTML = `
      <p>Estás en:</p>
      <ul>
      <li>Latitud: <b>${coords.latitude}</b></li>
      <li>Longitud: <b>${coords.longitude}</b></li>
      <li>Precisión: <b>${coords.accuracy} metros</b></li>
      </ul>
      <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},10z" 
      target="_blank" 
      rel = "noopener">
      Ver en Google Maps
      </a>
      `;
  };
  // en caso contrario, pasamos esta
  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
  };
  // función del navegador para detectar nuestra posición actual
  n.geolocation.getCurrentPosition(success, error, options);
}
