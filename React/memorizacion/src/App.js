import Contador from "./components/Contador";

function App() {
  return (
    <div>
      <h1>Memorización en React</h1>
      <hr />
      <hr />
      <h2>Teoría</h2>
      <h3>
        <a
          href="https://es.reactjs.org/docs/react-api.html#reactmemo"
          target="_blank"
          rel="noreferrer"
        >
          Documentación oficial: React.memo()
        </a>
      </h3>
      <ul>
        <li>Se encarga de memorizar un componente</li>
        <li>
          Lo vuelve a renderizar <b>cuando sus props cambian</b>
        </li>
        <li>Evita duplicar renderizados</li>
        <li>
          Hay que evitarlo siempre que se pueda, pues a veces consume más
          recursos la memorización que el renderizado duplicado
        </li>
        <li>
          Úsalo en estos casos:
          <ol>
            <li>Tenemos muchos elementos renderizados en una lista</li>
            <li>Llamamos datos de APIs</li>
            <li>Un componente se vuelve muy pesado</li>
            <li>Salen alertas de rendimiento en la consola</li>
          </ol>
        </li>
      </ul>
      <h3>
        <a
          href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbXVrVllnb2ZZekpNenk1TkNPYjk5RFBqbE1tQXxBQ3Jtc0ttN09yUmdTZlNkUzY5SFF3UDc3UHNHZG91YjdZRkd3ZVdRVXZWXzhwc0VFanpSOUg0SEwzazhXbzBiQTVtMUVjdkhxSUluTURfOThWZkFrbXZwWjVxSDFCMnd4V1hTZFNDVmNGUUdLbnhFdWJnc1NBVQ&q=https%3A%2F%2Fes.reactjs.org%2Fdocs%2Fhooks-reference.html%23usecallback&v=78GQ3tUQzXo"
          target="_blank"
          rel="noreferrer"
        >
          Documentación oficial: useCallback()
        </a>
      </h3>
      <ul>
        <li>
          Memoriza una función <b>para no volverla a definir en cada render</b>
        </li>
        <li>
          Úsalo siempre que se pase una función{" "}
          <b>como prop a un componente memorizado</b>
        </li>
        <li>
          Úsalo siempre que se pase una función{" "}
          <b>como parámetro de un efecto</b>
        </li>
      </ul>
      <h3>
        <a
          href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazB6bk9DYkpjUG9qLUhBVDZWQUJ0c2dNNV85Z3xBQ3Jtc0tuMVdaRFFHRDdMUjZvWnk0QU02eWwzOHhDZHlnRVlCUHptNlVHUHMwRzdXdUVqNDU1R1QxSGFpLXNneGVkaFZCOTV0QU1zcHlDYWstTjVfVnBWZk1VNnZGU0oySjkyNHRJajJTYnVjWi1FVlI1TGs1dw&q=https%3A%2F%2Fes.reactjs.org%2Fdocs%2Fhooks-reference.html%23usememo&v=Udpom1ZYr0I"
          target="_blank"
          rel="noreferrer"
        >
          Documentación oficial: useMemo()
        </a>
      </h3>
      <ul>
        <li>
          <b>Memoriza un valor calculado</b>, esto es, el resultado de una
          función.
        </li>
        <li>Genera propiedades computadas.</li>
        <li>Úsalo para procesos pesados que afecten el rendimiento</li>
      </ul>
      <hr />
      <Contador />
    </div>
  );
}

export default App;
