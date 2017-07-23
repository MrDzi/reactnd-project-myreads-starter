import React from 'react';
import Book from './Book';

// stateless component which renders books or 'no result'
const SearchBooksResults = (props) => (
    <div className="search-books-results">
        <ol className="books-grid">
            {props.books && !!props.books.length && props.books.map((book) => (
                <li key={book.id}>
                    <Book book={book} updateBook={props.updateBook} />
                </li>
            ))}
        </ol>
        {props.userSearched && !props.books.length && <span>No results.</span>}
    </div>
);

export default SearchBooksResults;
