import React from 'react';
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class ListBooks extends React.Component {
    constructor() {
        super();
        this.updateBook = this.updateBook.bind(this);
    }
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            let state = {
                currentlyReading: books.filter(book => {
                    return book.shelf === 'currentlyReading'
                }),
                wantToRead: books.filter(book => {
                    return book.shelf === 'wantToRead'
                }),
                read: books.filter(book => {
                    return book.shelf === 'read'
                })
            }
            this.setState(state);
        });
    }
    updateBook(book, shelf) {
        BooksAPI.update(book, shelf).then((response) => {
            let { currentlyReading, wantToRead, read } = response;
            this.setState({ currentlyReading, wantToRead, read });
        });
    }
    render() {
        return (
            <div>
                <BookShelf title="Currently Reading" updateBook={this.updateBook} books={this.state.currentlyReading} />
                <BookShelf title="Want To Read" updateBook={this.updateBook} books={this.state.wantToRead} />
                <BookShelf title="Read" updateBook={this.updateBook} books={this.state.read} />
            </div>
        )
    }
}

export default ListBooks;
