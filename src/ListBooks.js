import React from 'react';
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import _ from 'lodash'

class ListBooks extends React.Component {
    constructor() {
        super();
        this.updateBook = this.updateBook.bind(this);
    }
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            let state = {
                books
            }
            this.setState(state);
        });
    }
    updateBook(book, shelf) {
        BooksAPI.update(book, shelf).then(() => {
            let books = this.state.books;
            let updatedBook = _.find(books, ['id', book.id]);
            updatedBook.shelf = shelf;
            this.setState({ books });
        });
    }
    render() {
        return (
            <div>
                <BookShelf title="Currently Reading" updateBook={this.updateBook} books={this.state.books.filter(book => book.shelf === 'currentlyReading')} />
                <BookShelf title="Want To Read" updateBook={this.updateBook} books={this.state.books.filter(book => book.shelf === 'wantToRead')} />
                <BookShelf title="Read" updateBook={this.updateBook} books={this.state.books.filter(book => book.shelf === 'read')} />
            </div>
        )
    }
}

export default ListBooks;
