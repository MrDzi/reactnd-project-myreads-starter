import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

// Bookshelf stateless component, renders the title and the books
const BookShelf = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {props.books.map((book, index) => (
                    <li key={`${book.id}-${index}`}>
                        <Book updateBook={props.updateBook} book={book} />
                    </li>
                ))}
            </ol>
        </div>
    </div>
);

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired,
    title: PropTypes.string
};

export default BookShelf;
