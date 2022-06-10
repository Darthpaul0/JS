import React, { useState, useEffect } from "react";

export default function AjaxHooks() {
  const [pokemones, setPokemones] = useState([]);

  //   useEffect(() => {
  //     let url = `https://pokeapi.co/api/v2/pokemon/`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         //console.log(json);
  //         json.results.forEach((el) => {
  //           fetch(el.url)
  //             .then((res) => res.json())
  //             .then((json) => {
  //               //console.log(json);
  //               let pokemon = {
  //                 id: json.id,
  //                 name: json.name,
  //                 avatar: json.sprites.front_default,
  //               };
  //               setPokemones((pokemones) => [...pokemones, pokemon]);
  //             });
  //         });
  //       });
  //   }, []);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/`;
    const getPokemones = async (url) => {
      let res = await fetch(url),
        json = await res.json();

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        setPokemones((pokemones) => [...pokemones, pokemon]);
      });
    };
    getPokemones(url);
  }, []);

  function Pokemon({ avatar, name }) {
    return (
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    );
  }

  return (
    <>
      <h2>Peticiones Asíncronas en Componentes de Clase</h2>
      {pokemones.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemones.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
