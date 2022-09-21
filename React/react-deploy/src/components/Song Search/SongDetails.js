/**
 * Este componente se encarga de mostrar los detalles de la canción
 * y del artista a través de los componentes SongArtist y SongLyrics
 */

import Message from "../CrudAPI/Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la canción "${search.song}"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no existe el intérprete '${search.artist}'`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
