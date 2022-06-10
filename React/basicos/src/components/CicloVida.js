import React, { Component } from "react";

class Reloj extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentWillUnmount() {
    //console.log(3, "Componente eliminado del DOM");
  }
  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    //console.log(0, "Inicialización - NO DOM");
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };
    this.temporizador = null;
  }

  componentDidMount() {
    //console.log(1, "Componente en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(2, "Estado o props actualizados");
    //console.log(prevProps);
    //console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };
  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
        visible: false,
      });
  };

  render() {
    //console.log(4, "Dibujado del Componente - Cambio en el DOM");
    return (
      <>
        <h2>Ciclo de Vida de los Componente de Clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Parar</button>
      </>
    );
  }
}
