import { DeleteOutlined, DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

export default function AddBook() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  // Fetch all books from the API
  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:4000/books');
      if (!response.ok) {
        throw new Error('Error fetching books');
      }

      const data = await response.json();
      setBooks(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setIsLoading(false);
    }
  };

  // Delete a book from the API
  const deleteBook = async (bookId) => {
    try {
      await fetch(`http://localhost:4000/books/${bookId}`, {
        method: 'DELETE'
      });
      fetchBooks(); // Refresh the book list after deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  // Handle the delete button click
  const handleDelete = (bookId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete the book?');

    if (confirmDelete) {
      deleteBook(bookId);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Navbar/>
    <div className='container'>
      <h1>All Books</h1>
      <Link to="/books/new">Add New Book</Link>

      <ul>
        {books.map((book) => (
          // <li key={book.id}>
          //   <Link to={`/books/${book.id}`}>{book.title}</Link>
          //   <button onClick={() => handleDelete(book.id)}>Delete</button>
          //   <Link to={`/books/${book.id}/edit`}>Edit</Link>
          // </li>
          <div className='compo'>

            <div className='d-flex'>
              <div className='p-1 mr-2'>
                <img src={book.image} alt="Not_Found" width={150} />
              </div>
              <div className='p-3 div3'>
                <h4 className=' '>{book.title}</h4>
                <i className='font-weight-bold'>{book.author}</i>
              </div>
              <div className='buttons'>
              <button className='dltbtn' onClick={() => handleDelete(book.id)}><DeleteTwoTone /></button>
            <Link to={`/books/${book.id}/edit`}>
              <button className='dltbtn' ><EditTwoTone /></button>
            </Link>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
    </div>
  );
}
