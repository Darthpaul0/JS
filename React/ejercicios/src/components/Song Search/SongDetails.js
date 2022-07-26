/**
 * Este componente se encarga de mostrar los detalles de la canción
 * y del artista a través de los componentes SongArtist y SongLyrics
 */

import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  return (
    <div>
      <h2>Detalles</h2>
      <SongArtist />
      <SongLyric />
    </div>
  );
};

export default SongDetails;
