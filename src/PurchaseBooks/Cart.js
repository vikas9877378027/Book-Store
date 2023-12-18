import React from 'react';

function Cart({ cart, handleBuy }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((book) => (
        <div key={book.id} className="cart-item">
          <p>{book.title}</p>
        </div>
      ))}
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
}

export default Cart;
