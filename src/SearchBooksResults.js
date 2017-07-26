import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

// stateless component which renders books or 'no result'
const SearchBooksResults = (props) => (
    <div className="search-books-results">
        <ol className="books-grid">
            {props.books && !!props.books.length && props.books.map((book, index) => (
                <li key={`${book.id}-${index}`}>
                    <Book book={book} updateBook={props.updateBook} />
                </li>
            ))}
        </ol>
        {props.userSearched && !props.books.length && <span>No results.</span>}
    </div>
);

SearchBooksResults.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired,
    userSearched: PropTypes.bool.isRequired
};

export default SearchBooksResults;
