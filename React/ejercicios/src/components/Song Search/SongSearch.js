/**
 * Componente principal
 * Aquí mostraremos el formulario y los detalles de la canción buscada
 */

import React, { useState, useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import Loader from "../CrudAPI/Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  // variable de estado para controlar la búsqueda, recibe información de SongForm
  const [search, setSearch] = useState(null);

  // variable de estado para controlar la información de la canción
  const [lyric, setLyric] = useState(null);

  // variable de estado para controlar la información del artista
  const [bio, setBio] = useState(null);

  // variable de estado para controlar el loader
  const [loading, setLoading] = useState(false);

  // usamos un efecto para poder trabajar las peticiones asíncronas
  useEffect(() => {
    // validación de renderizado
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      // variable que apunta al endpoint del artista
      let artistURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      // variable que apunta al endpoint de la canción
      let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      // cargamos el loader mientras responden las APIs
      setLoading(true);

      // recogemos las respuesta de las APIs
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistURL),
        helpHttp().get(songURL),
      ]);

      //console.log(artistRes, songRes);

      // actualizamos las variables de estado con la respuesta de la API
      setBio(artistRes);
      setLyric(songRes);

      // eliminamos el loader una vez tenemos respuesta de las APIs
      setLoading(false);
    };
    fetchData();
  }, [search]);

  // método para manejar la búsqueda
  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>SongSearch</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {/* Controlamos que no muestre nada mientras que no tengamos respuesta */}
        {/* y el loader desaparezca */}
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </div>
  );
};

export default SongSearch;
