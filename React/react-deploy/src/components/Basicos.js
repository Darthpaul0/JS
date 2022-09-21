/**
 * BrowserRouter es el componente principal para las
 * rutas en React, por convención se le suele poner
 * un alias, normalmente solo Router
 */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import Nosotros from "../pages/Nosotros";
import Error404 from "../pages/Error404";
import MenuConceptos from "./MenuConceptos";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Componentes from "../pages/Componentes";
import JSX from "../pages/JSX";
import Estado from "../pages/Estado";
import Props from "../pages/Props";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
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
      <h2>HashRouter</h2>
      <p>
        Utilizando el componente HashRouter evitamos que al pasar a producción
        haya errores al cargar la página, ya que interpreta que todo está dentro
        del mismo recurso, en este caso en el index.html. Esto es útil si
        estamos construyendo una SPA y no tenemos Server Side Rendering
      </p>
      <HashRouter>
        {/**
         * Para poder usar las rutas, las englobamos en el componente HashRouter,
         * para después agruparlas en el componente Routes.
         * Después, a cada ruta hay que especificarle su path y qué va a mostrar,
         * que generalmente será otro componente*/}
        {/* Componente para mostrar el menú de rutas */}
        <MenuConceptos />
        <Routes>
          {/* Cada ruta debe tener asignado su propio componente */}
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/usuario" element={<Usuario />}>
            <Route path=":username" element={<Contacto />} />
          </Route>
          <Route path="/productos" element={<Productos />} />
          <Route
            path="/about"
            // Usamos el objeto Navigate redirigir o no
            element={<Navigate replace to="/nosotros" />}
          ></Route>
          <Route
            path="/contact"
            // Usamos el objeto Navigate redirigir o no
            element={<Navigate replace to="/contacto" />}
          ></Route>
          <Route path="/react" element={<ReactTopics />}>
            <Route path="jsx" element={<JSX />} />
            <Route path="componentes" element={<Componentes />} />
            <Route path="estado" element={<Estado />} />
            <Route path="props" element={<Props />} />
          </Route>
          <Route path="*" element={<Error404 />} />
          <Route path="/login" element={<Login />} />
          {/* Para hacer privada una ruta, la englobamos dentro de otra
          que contenga un componente encargado de la privacidad */}
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </HashRouter>
      {/* <Router>
        <h2>
          <mark>Conceptos Básicos</mark>
        </h2>
        *
         * Para poder usar las rutas, las englobamos en el componente HashRouter,
         * para después agruparlas en el componente Routes.
         * Después, a cada ruta hay que especificarle su path y qué va a mostrar,
         * que generalmente será otro componente
        Componente para mostrar el menú de rutas
        <MenuConceptos />
        <Routes>
          Cada ruta debe tener asignado su propio componente
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/usuario" element={<Usuario />}>
            <Route path=":username" element={<Contacto />} />
          </Route>
          <Route path="/productos" element={<Productos />} />
          <Route
            path="/about"
            // Usamos el objeto Navigate redirigir o no
            element={<Navigate replace to="/nosotros" />}
          ></Route>
          <Route
            path="/contact"
            // Usamos el objeto Navigate redirigir o no
            element={<Navigate replace to="/contacto" />}
          ></Route>
          <Route path="/react" element={<ReactTopics />}>
            <Route path="jsx" element={<JSX />} />
            <Route path="componentes" element={<Componentes />} />
            <Route path="estado" element={<Estado />} />
            <Route path="props" element={<Props />} />
          </Route>
          <Route path="*" element={<Error404 />} />
          <Route path="/login" element={<Login />} />
          Para hacer privada una ruta, la englobamos dentro de otra
          que contenga un componente encargado de la privacidad
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router> */}
    </div>
  );
};

export default Basicos;
