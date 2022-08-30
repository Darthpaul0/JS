/**
 * BrowserRouter es el componente principal para las
 * rutas en React, por convención se le suele poner
 * un alias, normalmente solo Router
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import Nosotros from "../pages/Nosotros";
import Error404 from "../pages/Error404";
import MenuConceptos from "./MenuConceptos";
import Usuario from "../pages/Usuario";
// const Basicos = () => {
//   return (
//     <div>
//       <h2>
//         <mark>Conceptos Básicos</mark>
//       </h2>
//       {/**
//        * Para poder usar las rutas, las englobamos en
//        * el componente Router, para después agruparlas
//        * en el componente Routes. Después, a cada ruta
//        * hay que especificarle su path y qué va a mostrar,
//        * que generalmente será otro componente
//        */}
//       <Router>
//         <Routes>
//           {/* Cada ruta debe tener asignado su propio componente */}
//           <Route path="/" element={<Home />} />
//           <Route path="/nosotros" element={<Nosotros />} />
//           <Route
//             path="/contacto"
//             element={
//               <>
//                 <Contacto />
//                 <p>lorem ipsum</p>
//               </>
//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

const Basicos = () => {
  return (
    <div>
      <h2>
        <mark>Conceptos Básicos</mark>
      </h2>
      {/**
       * Para poder usar las rutas, las englobamos en el componente Router, para después agruparlas
       * en el componente Routes. Después, a cada ruta hay que especificarle su path y qué va a mostrar,
       * que generalmente será otro componente
       */}
      <Router>
        {/* Componente para el menú */}
        <MenuConceptos />
        <Routes>
          {/* Cada ruta debe tener asignado su propio componente */}
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/usuario" element={<Usuario />}>
            <Route path=":username" element={<Contacto />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Basicos;
