/**
 * En este componente haremos nuestro formulario
 */

import React, { useState } from "react";

// el formulario está vacío en principio
const initialForm = { artist: "", song: "" };

const SongForm = ({ handleSearch }) => {
  // variable de estado para controlar el formulario
  const [form, setForm] = useState(initialForm);

  // método para controlar los cambios en el formulario
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // método para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // si no sabemos el artista o el nombre de la canción
    if (!form.artist || !form.song) {
      alert("Datos incompletos");
      return;
    }

    // le pasamos la información a handleSearch
    handleSearch(form);

    // limpiamos el formulario
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del artista"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la canción"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default SongForm;
