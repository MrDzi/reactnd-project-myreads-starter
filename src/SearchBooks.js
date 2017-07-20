import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResults from './SearchBooksResults'
import _ from 'lodash'

class SearchBooks extends React.Component {
    constructor() {
        super();
        this.handleSearchChange = this.handleSearchChange.bind(this);
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
        searchBooks(value).then((response) => {
            response.error && !response.items.length ? this.setState({ books: [] }) : this.setState({ books: response });
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

function searchBooks(value) {
    return BooksAPI.search(value);
}

export default SearchBooks;
