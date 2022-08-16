/**
 * BrowserRouter es el componente principal para las
 * rutas en React, por convención se le suele poner
 * un alias, normalmente solo Router
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Basicos = () => {
  return (
    <div>
      <h2>
        <mark>Conceptos Básicos</mark>
      </h2>
      {/**
       * Para poder usar las rutas, las englobamos en
       * el componente Router, para después agruparlas
       * en el componente Routes. Después, a cada ruta
       * hay que especificarle su path y qué va a mostrar,
       * que generalmente será otro componente
       */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </div>
  );
};
// Cada ruta debe tener asignado su propio componente
const Home = () => {
  return (
    <>
      <h3>HOME</h3>
      <p>Aprendiendo a manejar las rutas</p>
    </>
  );
};
const Nosotros = () => {
  return (
    <>
      <h3>Sobre nosotros</h3>
    </>
  );
};
const Contacto = () => {
  return (
    <>
      <h3>Contacto</h3>
    </>
  );
};

export default Basicos;
