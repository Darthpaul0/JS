import React, { useReducer } from "react";
import { TYPES } from "../../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  // añadir productos
  const addToCart = (id) => {
    // console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  //eliminar productos
  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  // limpiar carrito
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h2>ShoppingCart</h2>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {/* Renderizamos los productos */}
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>My Cart</h3>
      <button onClick={clearCart}>Clear Cart</button>
      <article className="box">
        {/* Renderizamos los productos */}
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
