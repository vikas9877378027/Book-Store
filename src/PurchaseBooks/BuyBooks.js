import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import './cart.css'
import { ShoppingCartOutlined } from '@ant-design/icons';

function BuyBooks() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [buyPageVisible, setBuyPageVisible] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBuy = () => {
    setBuyPageVisible(true);
  };

  const handleProcessPayment = () => {
    setPaymentProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentComplete(true);
    }, 2000);
  };

  const handleBackToShopping = () => {
    setBuyPageVisible(false);
    setPaymentComplete(false);
    setCart([]);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
        <Navbar/>
      {!buyPageVisible && (
        // <div>
            <div>
                <div className='m-5'>
          <input
          className='container m-auto w-50 form-control'
            type="text"
            placeholder="Search books"
            value={searchTerm}
            onChange={handleSearch}
          />
          </div>
          <div  className='books_card_screen d-flex flex-wrap'>
          {filteredBooks.map((book) => (
            <div className='cards-container_Books' key={book.id}>
            <div>
                <div><button  onClick={() => addToCart(book)} className='cart'><ShoppingCartOutlined /></button></div>
                <div className='card_img'>
                  <img className='' src={book.image} alt="not_Found" width={150} />
                </div>
                <div className='label'><label>&#8377; {book.price}</label></div>
             
              <div className='card-content_book'>
                <h6 className=' '>{book.title}</h6>
                <i className='text-secondary'>{book.author}</i>
                            
            </div>
          </div>
              {/* <button onClick={() => addToCart(book)}>Add to Cart</button> */}
            </div>
          ))}
         </div>
          {cart.length > 0 && (
            <div className="cart">
              <h2>Cart</h2>
              {cart.map((book) => (
                <div key={book.id} className="cart-item">
                  <p>{book.title}</p>
                </div>
              ))}
              <button className='btn' onClick={handleBuy}>Buy</button>
            </div>
          )}
        </div>
      )}
      
      {buyPageVisible && (
        <div className="buy-page container">
          {paymentComplete ? (
            <div className="payment-success">
              <h2>Payment Successful!</h2>
              <p>Your order has been placed.</p>
              <button className='btn' onClick={handleBackToShopping}>Back to Shopping</button>
            </div>
          ) : (
            <div className="container payment-processing">
              <h2>Processing Payment</h2>
              <p>Please wait while we process your payment...</p>
              {!paymentProcessing && (
                <button className='btn' onClick={handleProcessPayment}>Process Payment</button>
              )}
            </div>
          )}
          
          <div className="container cart-summary">
            <h3>Cart Summary:</h3>
            <ul>
              {cart.map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuyBooks;
