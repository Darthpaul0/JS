import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import { crudReducer } from "./crudReducer";
import { shoppingReducer } from "./shoppingReducer";

const reducer = combineReducers({
  contador: contadorReducer,
  shoppingCart: shoppingReducer,
  crud: crudReducer,
});

export default reducer;
