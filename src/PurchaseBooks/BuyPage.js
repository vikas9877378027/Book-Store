import React, { useState, useEffect } from 'react';

function BuyPage({ history, cart }) {
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  useEffect(() => {
    if (paymentProcessing) {
      // Simulate payment processing
      setTimeout(() => {
        setPaymentProcessing(false);
        setPaymentComplete(true);
      }, 2000);
    }
  }, [paymentProcessing]);

  const handleProcessPayment = () => {
    setPaymentProcessing(true);
  };

  const handleBackToShopping = () => {
    history.push('/');
  };

  return (
    <div className="buy-page">
      {paymentComplete ? (
        <div className="payment-success">
          <h2>Payment Successful!</h2>
          <p>Your order has been placed.</p>
        </div>
      ) : (
        <div className="payment-processing">
          <h2>Processing Payment</h2>
          <p>Please wait while we process your payment...</p>
          {!paymentProcessing && (
            <button onClick={handleProcessPayment}>Process Payment</button>
          )}
        </div>
      )}
      <div className="cart-summary">
        <h3>Cart Summary:</h3>
        <ul>
          {cart.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </div>
      {paymentComplete && (
        <button onClick={handleBackToShopping}>Back to Shopping</button>
      )}
    </div>
  );
}

export default BuyPage;
