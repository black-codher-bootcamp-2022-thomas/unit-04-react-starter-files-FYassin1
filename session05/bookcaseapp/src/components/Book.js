import React from 'react';
import Book from './Book.css';
import PropTypes from "prop-types";



const Book = (props) => {

   function addBook(title) {
    console.log(`The Book ${title} was
    clicked`);
     }

return (
<div>
<h2>{props.book.volumeInfo.title}</h2>
<h1>{props.book.volumeInfo.author}</h1>
<h1>{props.book.volumeInfo.price}</h1>
<h1>{props.book.volumeInfo.description}</h1>

<button onClick={() =>
addBook(props.title)}> Add +</button>

</div>
 );
}

Book.propTypes = {
  authors: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  title: PropTypes.array.isRequired,
  price: PropTypes.array.isRequired,
}

Book.defaultProps = { description: "No description…"};

export default Book;
