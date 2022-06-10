const d = document,
  $form = d.getElementById("song-search"),
  $loader = d.querySelector(".loader"),
  $error = d.querySelector(".error"),
  $main = d.querySelector("main"),
  $artist = d.querySelector(".artist"),
  $song = d.querySelector(".song");

$form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    // mostramos la imagen de carga
    $loader.style.display = "block";
    // almacenamos en variables la información de los inputs
    let artist = e.target.artist.value.toLowerCase(),
      song = e.target.song.value.toLowerCase(),
      // en estas variables iremos pegando la información
      $artistTemplate = "",
      $songTemplate = "",
      artistAPI = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
      songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`,
      artistFetch = fetch(artistAPI),
      songFetch = fetch(songAPI),
      // aquí estamos usando la destructuración (vídeo 18)
      [artistRes, songRes] = await Promise.all([artistFetch, songFetch]),
      artistData = await artistRes.json(),
      songData = await songRes.json();

    //console.log(artistRes, songRes);
    console.log(artistData, songData);

    // validaciones de artistas
    if (artistData.artists === null) {
      $artistTemplate = `<h2>No hemos encontrado el intérprete <mark>${artist}</mark></h2>`;
    } else {
      let artist = artistData.artists[0];
      $artistTemplate = `
      <h2>${artist.strArtist}</h2>
      <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
      <p>${artist.intBornYear} - ${artist.intDiedYear || "Hoy"}</p>
      <p>${artist.strCountry}</p>
      <p>${artist.strGenre} - ${artist.strStyle}</p>
      <a href="http://${artist.strWebsite}" target="_blank">Sitio Web</a>
      <p>${artist.strBiographyEN}</p>
      `;
    }

    // validación de canciones
    if (songData.error) {
      $songTemplate = `<h2>La canción <mark>${song.toUpperCase()}</mark> no existe o no es del intérprete ${artist.toUpperCase()}</h2>`;
    } else {
      $songTemplate = `
        <h2>${song.toUpperCase()}</h2>
        <blockquote>${songData.lyrics}</blockquote>
        `;
    }

    $loader.style.display = "none";
    $artist.innerHTML = $artistTemplate;
    $song.innerHTML = $songTemplate;
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Ha ocurrido un error";
    $error.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    $loader.style.display = "none";
  }
});
