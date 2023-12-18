import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const Card = (props) => (
    <div>
     <Link to="/books"><div className="card"> 
     <img src={ props.imgUrl } 
        alt={ props.alt || 'Image' } />
    </div></Link>
      <div className="card-content">
        <h6>{ props.title }</h6>
        <i className="text-secondary">{ props.content }</i>
      </div>
      </div>
  );
  
  const CardContainer = (props) => (
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <Card title={ card.title }
            content={ card.author }
            imgUrl={ card.img } />
        ))
      }
    </div>
  );
  
  class CardSlider extends React.Component {
    render () {
      const cardsData = [
        {
            id: 2,
            title: "A First Book (Classic Reprint)",
            author: " Henry S. Pancoast",
            img: "https://m.media-amazon.com/images/I/712JSMIVdHL.jpg",
        }, {
            id: 3,
            title: "The Oath of the Vayuputras",
            author: "Gabrielle-Suzanne de Villeneuve",
            img: "https://books.google.co.in/books/publisher/content?id=ZO9gBQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1YE3KWhucm9OvsmTfPbtsSC7uADw&w=1280",
          
        }, {
            id: 4,
            title: "Book BEAUTY AND THE BEAST",
            author: "Craig Grannel",
            img: "https://pic.soundofmusic-shop.de/Book-BEAUTY-AND-THE-BEAST-Poster-Collection-16-removable-posters-.97208a.jpg"
        }, {
            id: 5,
            title: "Operating System Concepts",
            author: "Abraham Silberschatz",
            img: "https://media.wiley.com/product_data/coverImage300/55/11180937/1118093755.jpg"
        }, {
            id: 6,
            title: " INTRODUCING HTML5",
            author: " Bruce Lawson and Remy",
            img: "https://www.developerdrive.com/wp-content/uploads/2013/02/ShowCover.jpg"
        }, {
            id: 7,
            title: " CSS3 FOR WEB DESIGNERS",
            author: "Dan Cederholm",
            img: "https://www.developerdrive.com/wp-content/uploads/2013/02/3-css3-for-web-designers-250px.jpg"
        }, {
            id: 8,
            title: " HTML5 & CSS3 FOR THE REAL WORLD",
            author: "Estelle Weyl, Louis Lazaris and Alexis Goldstein",
            img: "https://www.developerdrive.com/wp-content/uploads/2013/02/cover.png"
        }, {
            id: 9,
            title: "RESPONSIVE WEB DESIGN WITH HTML5 AND CSS3",
            author: "Ben Frain",
            img: "https://www.developerdrive.com/wp-content/uploads/2013/02/500x500_2790918_file.jpg"
        }, {
            id: 10,
            title: " THE BOOK OF CSS3: A DEVELOPER’S GUIDE TO THE FUTURE OF WEB DESIGN",
            author: "Peter Gasston",
            img: "https://www.developerdrive.com/wp-content/uploads/2013/02/c3cc35e755d5ee16bff743d78c3fc92c.jpg"
        }, {
            id: 11,
            title: " LEARNING WEB DESIGN: A BEGINNER’S GUIDE TO HTML, CSS, JAVASCRIPT, AND WEB GRAPH" +
                    "ICS",
            author: "Jennifer Niederst Robbins",
            img: "https://www.developerdrive.com/wp-content/uploads/2013/02/ea9df8b6f321a47b1e64184e0fc687d6.jpg"
        }, {
            id: 12,
            title: "  LEARNING JQUERY",
            author: "Jonathan Chaffer, Karl Swedberg",
            img: "https://www.developerdrive.com/wp-content/uploads/2013/02/jq.jpg"
        }
      ]
      
      return(
        <><br/><br/>
        <div>
          <CardContainer cards={ cardsData } />
        </div>
        </>
      );
    }
  }
  
//   ReactDOM.render(<App/>, document.querySelector('#app'));
export default CardSlider