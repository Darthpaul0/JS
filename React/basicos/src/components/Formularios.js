import React, { useState } from "react";

// VERSIÓN PARA FORMULARIOS SIMPLES
// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [color, setColor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Formulario enviado");
//   };
//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         {/* INPUT TEXT */}
//         <label htmlFor="nombre">Nombre: </label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         {/* RADIOBUTTON */}
//         <p>Elige tu color favorito:</p>
//         <input
//           type="radio"
//           id="azul"
//           name="color"
//           value="azul"
//           onChange={(e) => setColor(e.target.value)}
//           defaultChecked
//         />
//         <label htmlFor="azul">Azul</label>
//         <input
//           type="radio"
//           id="rojo"
//           name="color"
//           value="rojo"
//           onChange={(e) => setColor(e.target.value)}
//         />
//         <label htmlFor="rojo">Rojo</label>
//         <input
//           type="radio"
//           id="verde"
//           name="color"
//           value="verde"
//           onChange={(e) => setColor(e.target.value)}
//         />
//         <label htmlFor="verde">Verde</label>
//         <input
//           type="radio"
//           id="negro"
//           name="color"
//           value="negro"
//           onChange={(e) => setColor(e.target.value)}
//         />
//         <label htmlFor="negro">Negro</label>
//         <input
//           type="radio"
//           id="blanco"
//           name="color"
//           value="blanco"
//           onChange={(e) => setColor(e.target.value)}
//         />
//         <label htmlFor="blanco">Blanco</label>
//         <p>Elige tu lenguaje de programación favorito</p>
//         {/* SELECT */}
//         <select
//           name="lenguaje"
//           onChange={(e) => setLenguaje(e.target.value)}
//           defaultValue=""
//         >
//           <option value="">---</option>
//           <option value="js">JS</option>
//           <option value="php">PHP</option>
//           <option value="java">JAVA</option>
//           <option value="python">Python</option>
//         </select>
//         <br />
//         {/* CHECKBOX */}
//         <label htmlFor="terminos">Acepto vender mi alma</label>
//         <input
//           type="checkbox"
//           id="terminos"
//           name="terminos"
//           onChange={(e) => setTerminos(e.target.checked)}
//         />
//         <br></br>
//         {/* SUBMIT */}
//         <input type="submit" />
//       </form>
//     </>
//   );
// }

export default function Formularios() {
  // FORMULARIO COMPLEJO
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      // usamos el spread operator
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      // usamos el spread operator
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
  };
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        {/* INPUT TEXT */}
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        {/* RADIOBUTTON */}
        <p>Elige tu color favorito:</p>
        <input
          type="radio"
          id="azul"
          name="color"
          value="azul"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="azul">Azul</label>
        <input
          type="radio"
          id="rojo"
          name="color"
          value="rojo"
          onChange={handleChange}
        />
        <label htmlFor="rojo">Rojo</label>
        <input
          type="radio"
          id="verde"
          name="color"
          value="verde"
          onChange={handleChange}
        />
        <label htmlFor="verde">Verde</label>
        <input
          type="radio"
          id="negro"
          name="color"
          value="negro"
          onChange={handleChange}
        />
        <label htmlFor="negro">Negro</label>
        <input
          type="radio"
          id="blanco"
          name="color"
          value="blanco"
          onChange={handleChange}
        />
        <label htmlFor="blanco">Blanco</label>
        <p>Elige tu lenguaje de programación favorito</p>
        {/* SELECT */}
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="js">JS</option>
          <option value="php">PHP</option>
          <option value="java">JAVA</option>
          <option value="python">Python</option>
        </select>
        <br />
        {/* CHECKBOX */}
        <label htmlFor="terminos">Acepto vender mi alma</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br></br>
        {/* SUBMIT */}
        <input type="submit" />
      </form>
    </>
  );
}
