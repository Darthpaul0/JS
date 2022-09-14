const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>{price}€</h5>
      <h5>{quantity}</h5>
      <h5>
        Total a pagar = <mark>{price * quantity}€</mark>
      </h5>
      {/* eliminar un producto */}
      <button onClick={() => delFromCart(id)}>Delete product</button>
      <br />
      {/* eliminar todos los productos de este tipo */}
      <button onClick={() => delFromCart(id, true)}>Delete all products</button>
      <br /><br/>
    </div>
  );
};

export default CartItem;
