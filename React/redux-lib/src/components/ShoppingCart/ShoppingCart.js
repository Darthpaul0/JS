import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import {
  addToCart,
  clearCart,
  delFromCart,
} from "../../actions/shoppingActions";

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { products, cart } = state.shoppingCart;

  return (
    <div>
      <h2>ShoppingCart</h2>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {/* Renderizamos los productos */}
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </article>
      <h3>My Cart</h3>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <article className="box">
        {/* Renderizamos los productos */}
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
