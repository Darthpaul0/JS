import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
} from "../types";

export const initialState = { db: [] };

export function crudReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_DATA: {
      console.log(action.payload);
      return { ...state, db: [...state.db, action.payload] };
    }
    case READ_ALL_DATA: {
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case UPDATE_DATA: {
      let newData = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      return { ...state, db: newData };
    }
    case DELETE_DATA: {
      let newData = state.db.filter((el) => el.id !== action.payload);
      return { ...state, db: newData };
    }
    case NO_DATA:
      return initialState;
    default:
      return state;
  }
}
