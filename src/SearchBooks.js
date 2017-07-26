import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import * as Utils from './Utils';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';

// Search books statefull component - renders search bar and search results stateless components
class SearchBooks extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }
    constructor() {
        super();
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.searchBooksTimeout = null;
    }
    state = {
        query: '',
        filteredBooks: [],
        userSearched: false
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
            if (response.error && !response.items.length) {
                this.setState({ filteredBooks: [] });
            } else {
                // update the given data with the proper shelf values
                for (let item of response) {
                    Utils.updateItem(item, this.props.books, 'shelf');
                }
                this.setState({ filteredBooks: response });
            }
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
