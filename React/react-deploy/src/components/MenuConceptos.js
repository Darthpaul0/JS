import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces HMTL (no recomendado): </span>
          <a href="/">Home</a>
          <a href="/nosotros">Nosotros</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/error404">Error 404</Link>
        </li>
        <li>
          <span>Componente NavLink: </span>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/nosotros"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contacto
          </NavLink>
          <NavLink
            to="/no-existe"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Error 404
          </NavLink>
        </li>
        <li>
          <span>Parámetros: </span>
          <Link to="/usuario/python">User 1</Link>
          <Link to="/usuario/django">User 2</Link>
        </li>
        <li>
          <span>Parámetros de consulta: </span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones: </span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas: </span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas privadas </span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Panel de administración</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
