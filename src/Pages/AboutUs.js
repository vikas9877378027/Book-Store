import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function AboutUs() {
  return (
    <div>
        <Navbar/>
    <div className="container">
      <h2 className="mt-5 mb-4">About BooksForAll</h2>
      <div className="row">
        <div className="col-lg-6">
          <h4>Welcome to BooksForAll</h4>
          <p className="lead">Your go-to destination for all your reading needs.</p>
          <p>We believe that books have the power to inspire, educate, and entertain, and we are dedicated to providing a wide range of books to cater to every reader's taste and interest.</p>
          <p>At BooksForAll, we strive to create an inclusive and diverse reading community. We curate an extensive collection of books across various genres, including fiction, non-fiction, self-help, mystery, romance, and more. Whether you're a lifelong book enthusiast or a casual reader, there's something for everyone.</p>
        </div>
        <div className="col-lg-6">
          <h4>Our Mission</h4>
          <p className="lead">Making books accessible to all.</p>
          <p>Our mission is to make books accessible to all. We offer both physical books and digital e-books, ensuring that you can enjoy your favorite reads in a format that suits you best. With our user-friendly website, you can easily explore our catalog, discover new authors, and find recommendations based on your preferences.</p>
          <p>At BooksForAll, we are committed to promoting literacy and a love for reading. We actively collaborate with authors, publishers, and local communities to organize book events, author signings, and reading workshops. We believe in the power of storytelling and the impact it can have on individuals and society.</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-6">
          <h4>Our Team</h4>
          <p className="lead">Passionate about books and reader satisfaction.</p>
          <p>Our team of book enthusiasts is passionate about helping you find your next great read. We are here to provide personalized recommendations, answer your book-related queries, and create a seamless shopping experience. Customer satisfaction is our top priority.</p>
          <p>Join us in the joy of reading. Start your reading journey with BooksForAll today!</p>
        </div>
        <div className="col-lg-6">
          <h4>Get in Touch</h4>
          <p className="lead">Contact us for more information.</p>
          <p>If you have any questions, feedback, or inquiries, please feel free to reach out to our customer support team. We are here to assist you and ensure your reading experience with BooksForAll is exceptional.</p>
          <p>Email: info@booksforall.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
