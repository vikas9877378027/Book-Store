import React, { useState, useEffect } from 'react';
import _ from "lodash";
import { useGlobalContext } from './Context';
import './Css.css';
import '../Components/styles.css';
import Navbar from '../Components/Navbar';
import Button from "@material-ui/core/Button";
import Footer from '../Components/Footer';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Link } from 'react-router-dom';
import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';

export default function AllBooks() {
  const { books, isLoading, addToFavorite, favoriteBooks, removeFromFavorite } = useGlobalContext();
  const [searchValue, setSearchValue] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isResultNotFound, setIsResultNotFound] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Search filter
  const handleSearchFilter = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const filter = _.filter(books, (book) => {
      return _.includes(
        _.lowerCase(JSON.stringify(_.values(book))),
        _.lowerCase(searchValue)
      );
    });
    setFilteredBooks(filter);
    setIsResultNotFound(filter.length === 0);
  }, [books, searchValue]);

  if (isLoading) {
    return (
      <>
        <h1 className='container loader'><LoadingOutlined /></h1>
      </>
    );
  }

  // const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          padding: "2% 5% 0px 5%",
          justifyContent: "space-between",
          flexDirection: "row",
          backgroundColor: "white",
          marginTop: "0px"
        }}
        className="container Top_Area_Responsive"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "4vh"
          }}
          className="Top_Area_Text_Left_Responsive"
        >
          <div
            style={{
              fontSize: "50px",
              width: "35vw",
              cursor: "pointer"
            }}
          >
            <span
              className="underLine"
              style={{
                fontFamily: " 'Ubuntu', sans-serif",
                fontWeight: "bolder"
              }}
            >
              <h1 className="container font_heading ">Keep the story going.</h1>
              <h4 className='w-50 slogans'>Interested in books? Please come here. We have a huge variety of books for you.</h4>
            </span>
            <br />
          </div>

          <div style={{ marginTop: "8vh" }} className="Responsive_Head">
            <Button variant="contained" color="secondary">
              More Activities
            </Button>
          </div>
        </div>
        <div style={{ padding: "2%" }} data-aos="zoom-in-up">
          <video
            className="Vid w-75 side_img"
            poster="https://www.nicepng.com/png/detail/977-9770682_3d-stacked-books-book-cover.png"
          ></video>
        </div>
      </div>
      <br />
      <center>
        <input
          className='searchbar'
          type="search"
          placeholder="Search users..."
          value={searchValue}
          onChange={handleSearchFilter}
        />
        <SearchOutlined className='serach_icn' />
        <br />
        <hr width="80%" />
        <br />
      </center>

      <br />

      <div className='books_card_screen d-flex flex-wrap'>
        {isResultNotFound ? (
          <div className='result-not-found'>Result not found.</div>
        ) : (
          filteredBooks.map((book) => (
            <div className='cards-container_Books' key={book.id}>
              <div>
                <Link to={{
                  pathname: `/single-page/${book.id}`,
                  state: { bookId: book.id }
                }}>
                  <div className='card_img'>
                    <img className='' src={book.image} alt="not_Found" width={150} />
                  </div>
                </Link>
                <div className='card-content_book'>
                  <h6 className=' '>{book.title}</h6>
                  <i className='text-secondary'>{book.author}</i>
                  <div>
                    {/* <button className='reading' onClick={() => speak({ text: book.description })}>
                      Start Reading &nbsp;
                      <i className="bi bi-arrow-up-right-circle"></i>
                    </button> */}
                    {/* <button className='favorite' onClick={() => handleAddToFavorite(book)}>
                      {favoriteBooks.some(favoriteBook => favoriteBook.id === book.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button> */}
                    <div key={book.id}>
          {/* Book details */}  
            
        </div>
        
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      

      <Footer />
    </div>
  );
}
