import React from 'react'
import Book from './Book'

const SearchBooksResults = (props) => (
    <div className="search-books-results">
        <ol className="books-grid">
            {props.books && props.books.map((book) => (
                <li key={book.id}>
                    <Book book={book} updateBook={props.updateBook} />
                </li>
            ))}
        </ol>
    </div>
);

export default SearchBooksResults;
