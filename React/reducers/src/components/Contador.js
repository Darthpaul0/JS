import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Contador = () => {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const sumar = () => {
    dispatch({ type: "INCREMENTAR" });
  };
  const restar = () => {
    dispatch({ type: "DECREMENTAR" });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  );
};

export default Contador;
