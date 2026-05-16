import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => {
    return sum + parseFloat(item.price.replace("$", ""));
  }, 0);

  return (
    <div>
      <h2>Shopping Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} is in your cart
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;