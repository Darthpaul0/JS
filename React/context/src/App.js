import CrudAPI from "./components/CrudAPI/CrudAPI";
import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <hr />
      {/*
      El CrudProvider y el CrudConsumer no pueden estar en el 
      mismo archivo, por eso se debe declarar aquí
      */}
      <CrudProvider>
        <CrudAPI />
      </CrudProvider>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
