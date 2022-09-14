/**
 * Aquí definimos el estado inicial y la estructura lógica
 */

import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
    { id: 6, name: "Product 6", price: 60 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      /**
       * Buscamos el producto en base a su id
       * y después lo agregamos al carrito.
       * Si ya tenemos ese producto en el carrito,
       * no añadimos más CartItems, sino que aumentamos
       * su contador
       */
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? // si el id del producto añadido coincide con alguno ya
          // existente, aumentamos su propiedad quantity
          {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            /**
             * si itemIn Cart es null, significa que es el primer
             * producto de este tipo
             */
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            // usando filter podemos eliminar el producto
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        // usando filter podemos eliminar el producto
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
}
