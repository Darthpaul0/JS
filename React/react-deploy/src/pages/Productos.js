import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Productos = () => {
  //let location = useLocation();
  let { search } = useLocation();
  // este objeto ayuda a serializar la búsqueda
  let query = new URLSearchParams(search);

  // con estas variables definimos el rango de búsqueda
  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;

  // de esta forma simulamos la paginación en la búsqueda
  const navigate = useNavigate();

  // funciones para manejar la paginación
  // el funcionamiento es simple:
  // cuando pulsen en siguiente, se suma el limite
  // cuando pulsen en anterior, se resta el límite
  const handlePrev = () => {
    navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
  };

  const handleNext = () => {
    navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {/* De esta forma evitamos que se muestre el botón de atrás
          en la primera página */}
      {start > LIMIT && <button onClick={handlePrev}>Anterior</button>}
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Productos;
