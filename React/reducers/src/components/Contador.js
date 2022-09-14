import { useReducer } from "react";

const initialState = { count: 0 };

/* creamos una constante donde almacenaremos 
las diferentes opciones para dispatch*/
const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

/**
 * init es una función inicial asociada a useReducer que nos
 * permite ejecutar algunas modificaciones en nuestra App
 * antes de que se ejecute el resto de la lógica.
 * En la práctica se usa poco.
 */
const init = (initialState) => {
  return { count: initialState.count + 100 };
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { count: state.count + 1 };
    case TYPES.INCREMENT_5:
      return { count: state.count + action.payload };
    case TYPES.DECREMENT:
      return { count: state.count - 1 };
    case TYPES.DECREMENT_5:
      return { count: state.count - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const Contador = () => {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+1</button>
        <button onClick={reset}>RESET</button>
        <button onClick={restar}>-1</button>
        <button onClick={restar5}>-5</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  );
};

export default Contador;
