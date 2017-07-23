import React from 'react';
import * as BooksAPI from './BooksAPI';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';
import _ from 'lodash';

// Search books statefull component - renders search bar and search results stateless components
class SearchBooks extends React.Component {
    constructor() {
        super();
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.searchBooksTimeout = null;
    }
    state = {
        query: '',
        filteredBooks: [],
        userSearched: null
    }
    // handling user input change, setting the query to the state and debouncing API call
    handleSearchChange(value) {
        this.setState({ query: value });
        if (!value) {
            this.setState({ filteredBooks: [] });
            return;
        };
        if (this.searchBooksTimeout) {
            clearInterval(this.searchBooksTimeout);
        };
        this.searchBooksTimeout = setTimeout(this.searchBooks.bind(this, value), 500);
    }
    searchBooks(value) {
        BooksAPI.search(value).then((response) => {
            console.log(response);
            response.error && !response.items.length ? this.setState({ filteredBooks: [] }) : this.setState({ filteredBooks: response });
            this.searchBooksTimeout = null;
            // setting userSearched flag to true to display 'no results' to the user (if there is no results)
            if (!this.state.userSearched) {
                this.setState({ userSearched: true });
            }
        });
    }
    render() {
        return (
            <div className="search-books">
                <SearchBooksBar query={this.state.query} handleSearchChange={this.handleSearchChange} />
                <SearchBooksResults books={this.state.filteredBooks} updateBook={this.props.updateBook} userSearched={this.state.userSearched} />
            </div>
        )
    }
}

export default SearchBooks;
