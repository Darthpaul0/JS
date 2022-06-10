import React, { Component } from "react";
import data from "../helpers/data.json";

function ListItem(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Frühling", "Sommer", "Herbst", "Winter"],
    };
  }
  render() {
    //console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend para JS</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ListItem key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
