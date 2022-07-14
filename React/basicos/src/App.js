import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import "./App.css";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import Comunicacion from "./components/Comunicacion";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AJAX-APIs";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AJAX-Hooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="¡Hola! Soy un componente." />
          <hr></hr>
          <Propiedades
            cadena="Soy un string"
            number={77}
            boolean={false}
            array={[1, 2, 3]}
            object={{ nombre: "jon", edad: 35 }}
            funcion={(num) => num * num}
            reactElement={<i>Elemento de React</i>}
            reactComponent={<Componente msg="Desde otro componente" />}
          />
          <hr></hr>
          <Estado />
          <hr></hr>
          <RenderizadoCondicional />
          <hr></hr>
          <RenderizadoElementos />
          <hr></hr>
          <EventosES6 />
          <hr></hr>
          <EventosES7 />
          <hr></hr>
          <MasSobreEventos />
          <hr></hr> 
          <Comunicacion />
          <hr></hr>
          <CicloVida />
          <hr></hr>
          <AjaxApis />
          <hr></hr>
          <ContadorHooks />
          <hr></hr>
          <ScrollHooks />
          <hr></hr>
          <RelojHooks />
          <hr></hr>
          <AjaxHooks />
          <hr></hr>
          <HooksPersonalizados />
          <hr></hr>
          <Referencias />
          <hr></hr>
          <Formularios />
          <hr></hr>
          <Estilos />
          <hr></hr>
          <ComponentesEstilizados />
        </section>
      </header>
    </div>
  );
}

export default App;

