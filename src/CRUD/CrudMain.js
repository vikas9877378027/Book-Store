// UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CrudMain = () => {
  const [title, setName] = useState('');
  const [price, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the user data
    const userData = {
      title,
      price,
    };

    // Make the POST request to the server
    axios
      .post('/books', userData)
      .then((response) => {
        console.log(response.data);
        // Reset the form
        setName('');
        setEmail('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="price"
        value={price}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CrudMain;
