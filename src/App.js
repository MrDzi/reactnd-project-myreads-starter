import React from 'react';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import _ from 'lodash';
import { Route } from 'react-router-dom';
import './App.css';

// Main app component. Renders List books and Search books components
class BooksApp extends React.Component {
    constructor() {
        super();
        this.updateBook = this.updateBook.bind(this);
    }
    // setting the state with the list of books that are displayed on the homepage
    state = {
        books: []
    }
    // getting all the books initially
    componentDidMount() {
        BooksAPI.getAll().then((response) => {
            console.log(response);
            this.setState({ books: response });
        });
    }
    // update books from either homepage or search page (passed down as a prop)
    updateBook(book, shelf) {
        BooksAPI.update(book, shelf).then(() => {
            let books = this.state.books;
            let updatedBook = _.find(books, ['id', book.id]);
            // if the updated book is already on the shelf, update the existing book state (shelf) and set the new state...
            if (updatedBook) {
                updatedBook.shelf = shelf;
                this.setState({ books });
            }
            // ...otherwise add the new book to the state (without mutating it)
            else {
                book.shelf = shelf;
                this.setState({ books: books.concat([book]) });
            }
        });
    }
    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks books={this.state.books} updateBook={this.updateBook} />
                )} />
                <Route path="/search" render={() => (
                    <SearchBooks filteredBooks={this.state.filteredBooks} updateBook={this.updateBook} />
                )} />
            </div>
        )
    }
}

export default BooksApp;
