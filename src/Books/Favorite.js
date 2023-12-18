import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function FavoritePage() {
  const location = useLocation();
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    if (location.state && location.state.books) {
      setFavoriteBooks(location.state.books);
    }
  }, [location.state]);

  return (
    <div>
      <h1 className="text-center mb-4">Favorite Books</h1>
      {favoriteBooks.length === 0 ? (
        <div className="text-center">No favorite books found.</div>
      ) : (
        <div className="books_card_screen d-flex flex-wrap">
          {favoriteBooks.map((book) => (
            <div className="cards-container_Books" key={book.id}>
              <div>
                <div className="card_img">
                  <img className="" src={book.image} alt="not_Found" width={150} />
                </div>
                <div className="card-content_book">
                  <h6 className="">{book.title}</h6>
                  <i className="text-secondary">{book.author}</i>
                  <div>
                    {/* Other actions for favorite books */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
