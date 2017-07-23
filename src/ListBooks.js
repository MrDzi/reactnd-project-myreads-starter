import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

// this is functional component that renders 3 book shelves. Books are filtered and passed down
function ListBooks(props) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf title="Currently Reading" updateBook={props.updateBook} books={props.books.filter(book => book.shelf === 'currentlyReading')} />
                <BookShelf title="Want To Read" updateBook={props.updateBook} books={props.books.filter(book => book.shelf === 'wantToRead')} />
                <BookShelf title="Read" updateBook={props.updateBook} books={props.books.filter(book => book.shelf === 'read')} />
            </div>
            <div className="open-search">
                <Link className="open-search" to="/search">Add a book</Link>
            </div>
        </div>
    )
}

export default ListBooks;
