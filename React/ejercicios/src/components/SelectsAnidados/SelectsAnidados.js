/**
 * en este componente renderizamos el select anidado
 * usando como datos de ejemplo las CCAA, provincias y ciudades de España
 */
import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  // variable de estado para recoger la comunidad autónoma
  const [community, setCommunity] = useState("");
  // variable de estado para recoger la provincia
  const [province, setProvince] = useState("");
  // variable de estado para recoger el municipio
  const [town, setTown] = useState("");

  return (
    <div>
      <h2>SelectsAnidados</h2>
      <h3>ESPAÑA</h3>
      {/* A cada select le pasamos el título del label, la url de la API y 
      la función para registrar los cambios */}
      <SelectList
        title="COM"
        url="https://apiv1.geoapi.es/comunidades?type=JSON&key=&sandbox=1"
        handleChange={(e) => {
          setCommunity(e.target.value);
        }}
      />
      {/* Aplicamos un renderizado condicional para no mostrar selects vacíos */}
      {community && (
        <SelectList
          title="PRO"
          url={`https://apiv1.geoapi.es/provincias?CCOM=${community}&type=JSON&key=&sandbox=1`}
          handleChange={(e) => {
            setProvince(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="DMUN50"
          url={`https://apiv1.geoapi.es/municipios?CPRO=${province}&type=JSON&key=&sandbox=1`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      <pre>
        <code>
          {community} - {province} - {town}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
