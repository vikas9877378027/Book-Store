// import React, { useEffect } from 'react'
// import Navbar from '../Components/Navbar'
// import { useParams } from 'react-router-dom';
// import { useGlobalContext } from '../Books/Context';
// import './single.css'

// export default function Singlepage() {
//     const { books, isLoading } = useGlobalContext();
//     useEffect(
//       ()=>
//       { 
        
//       }
//     )
//   return (
//     <div>
//         <Navbar/>
//         <div className='background'>
//     <div className='img_cell d-flex'>
//         <div>
//             <img className='Book_img' src="https://books.google.co.in/books/publisher/content?id=ZO9gBQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1YE3KWhucm9OvsmTfPbtsSC7uADw&w=1280" 
//             alt="Not-Found" width={200}/>
//         </div>
//         <div>
//             <p  className='Book_title'>The Oath of the Vayuputras</p>
//             <p className='_author'>Gabrielle-Suzanne de Villeneuve</p>
//             <button className='reading_1' >
//                Start Reading &nbsp;
//                <i class="bi bi-arrow-up-right-circle"></i>
//               </button>
//         </div>
//     </div></div>
//         </div>
//   )
// }

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './single.css';
import Navbar from '../Components/Navbar';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function SinglePage() {
  const { speak, cancel } = useSpeechSynthesis();
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/books/${bookId}`);
        if (!response.ok) {
          throw new Error('Error fetching book details');
        }

        const bookData = await response.json();
        setBook(bookData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setIsLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleStartReading = () => {
    speak({ text: book.description });
    setIsReading(true);
  };

  const handlePauseReading = () => {
    cancel();
    setIsReading(false);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Navbar />
      <div className='background'>
        <div className='img_cell d-flex'>
          <div>
            <img className='Book_img' src={book.image} alt='Not-Found' width={200} />
          </div>
          <div>
            <p className='Book_title'>{book.title}</p>
            <h2 className='_author'>{book.author}</h2>
            {isReading ? (
              <button className='reading_1' onClick={handlePauseReading}>
                Pause Reading
              </button>
            ) : (
              <button className='reading_1' onClick={handleStartReading}>
                Start Reading &nbsp;
                <i className='bi bi-arrow-up-right-circle'></i>
              </button>
            )}
            <p className='description'>{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
