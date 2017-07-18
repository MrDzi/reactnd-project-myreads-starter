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
        BooksAPI.search(value).then((books) => {
            console.log(books);
            this.setState({ books });
        });
    }
    render() {
        return (
            <div className="search-books">
                <SearchBooksBar query={this.state.query} handleSearchChange={this.handleSearchChange} />
                <SearchBooksResults books={this.state.books} />
            </div>
        )
    }
}

export default SearchBooks;
