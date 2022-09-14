import { TYPES } from "../actions/contadorActions";

export const contadorInitialState = { count: 0 };

/**
 * init es una función inicial asociada a useReducer que nos
 * permite ejecutar algunas modificaciones en nuestra App
 * antes de que se ejecute el resto de la lógica.
 * En la práctica se usa poco.
 */
export const contadorInit = (contadorInitialState) => {
  return { count: contadorInitialState.count + 100 };
};

export function contadorReducer(state, action) {
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
      return contadorInitialState;
    default:
      return state;
  }
}
