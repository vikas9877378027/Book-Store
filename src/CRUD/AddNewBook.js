import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

export default function AddNewBook() {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation if needed

    setIsLoading(true);

    try {
      // Make API request to add the new book
      const response = await fetch('http://localhost:4000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        throw new Error('Error adding new book');
      }

      // Reset the form and navigate to the book list page
      setBookData({
        title: '',
        author: '',
      });
      setIsLoading(false);
      navigate('/books'); // Replace with the appropriate URL for the book list page
    } catch (error) {
      console.error('Error adding new book:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>Add New Book</h1>

        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='title' className='form-label'>
              Title
            </label>
            <input
              type='text'
              className='form-control'
              id='title'
              name='title'
              value={bookData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='author' className='form-label'>
              Author
            </label>
            <input
              type='text'
              className='form-control'
              id='author'
              name='author'
              value={bookData.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='author' className='form-label'>
              Image Url
            </label>
            <input
              type='text'
              className='form-control'
              id='image'
              name='image'
              value={bookData.image}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type='submit' className='btn btn-primary' disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Book'}
          </button>
        </form>
      </div>
    </div>
  );
}
