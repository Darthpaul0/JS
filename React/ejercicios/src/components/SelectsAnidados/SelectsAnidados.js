import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  // variables de estado para recoger el estado, municipio y colonia
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";

  return (
    <div>
      <h2>SelectsAnidados</h2>
      <h3>MÉXICO</h3>
      {/* A cada select le pasamos el título del label, la url de la API y 
      la función para registrar los cambios */}
      <SelectList
        title="estado"
        url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {/* Aplicamos un renderizado condicional para no mostrar selects vacíos */}
      {state && (
        <SelectList
          title="municipios"
          url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="colonia"
          url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
