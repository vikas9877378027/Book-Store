import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css'

export default function EditBook() {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchBook();
  }, []);

  // Fetch book details from the API
  const fetchBook = async () => {
    try {
      const response = await fetch(`http://localhost:4000/books/${bookId}`);
      if (!response.ok) {
        throw new Error('Error fetching book details');
      }

      const data = await response.json();
      setBook(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching book details:', error);
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/books/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book),
      });
      if (!response.ok) {
        throw new Error('Error updating book');
      }

      alert('Book updated successfully.');

      setTimeout(() => {
        window.location.href = '/books'; // Redirect to All Books page after success message
      }, 1000); // Wait for 3 seconds before redirecting
    } catch (error) {
      console.error('Error updating book:', error);
      // Handle the error and display an error message or redirect to an error page
    }
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container  ">
      <div className="text-center backshadow ">
        <h1 className='heading'>Edit Book</h1>
        {successMessage && <p>{successMessage}</p>}
        <form className='w-75 form' onSubmit={handleSubmit}>
          <div>
            <input type="text" className="form-control m-5 p-4" name="title" value={book.title || ''} onChange={handleChange} />
          </div>
          <div>
            <input type="text" name="author" className="form-control m-5 p-4" value={book.author || ''} onChange={handleChange} />
          </div>
          <div>
          <input type="text" className="form-control m-5 p-4" name="title" value={book.image || ''} onChange={handleChange} />
          </div>
          <div>
            <textarea name="description" className="form-control m-5 p-4" value={book.description || ''} onChange={handleChange} />
          </div>
          <button className='btn btn-success w-50' type="submit">Update Book</button>
        </form>
      </div>
    </div>
  );
}
