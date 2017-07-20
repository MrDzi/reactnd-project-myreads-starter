import React from 'react';
import * as BooksAPI from './BooksAPI';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import _ from 'lodash';

class SearchBooks extends React.Component {
    constructor() {
        super();
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.searchBooksTimeout = null;
    }
    state = {
        query: '',
        books: []
    }
    updateBook(book, shelf) {
        BooksAPI.update(book, shelf).then((response) => {
            console.log(response);
        });
    }
    handleSearchChange(value) {
        this.setState({ query: value });
        if (!value) {
            this.setState({ books: [] });
            return;
        };
        if (this.searchBooksTimeout) {

        }
        if (this.searchBooksTimeout) {
            clearInterval(this.searchBooksTimeout);
        }
        this.searchBooksTimeout = setTimeout(this.searchBooks.bind(this, value), 500);
    }
    searchBooks(value) {
        BooksAPI.search(value).then((response) => {
            response.error && !response.items.length ? this.setState({ books: [] }) : this.setState({ books: response });
            this.searchBooksTimeout = null;
        });
    }
    render() {
        return (
            <div className="search-books">
                <SearchBooksBar query={this.state.query} handleSearchChange={this.handleSearchChange} />
                <SearchBooksResults books={this.state.books} updateBook={this.updateBook} />
            </div>
        )
    }
}

export default SearchBooks;
