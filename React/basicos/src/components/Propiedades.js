import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "true" : "false"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{props.object.nombre + " - " + props.object.edad}</li>
        <li>{props.array.map(props.funcion).join(", ")}</li>
        <li>{props.reactElement}</li>
        <li>{props.reactComponent}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Props",
};

Propiedades.propTypes = {
  numero: PropTypes.number
};
