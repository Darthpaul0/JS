import React from "react";
import { Link, Outlet } from "react-router-dom";

const ReactTopics = () => {
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to="/react/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/react/props">Props</Link>
        </li>
        <li>
          <Link to="/react/estado">Estado</Link>
        </li>
        <li>
          <Link to="/react/componentes">Componentes</Link>
        </li>
      </ul>
      {/* Este componente ayuda a seleccionar correctamente la ruta anidada */}
      <Outlet />
    </div>
  );
};

export default ReactTopics;
