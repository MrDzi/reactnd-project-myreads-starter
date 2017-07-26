import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBooksBar = (props) => (
    <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
            <input type="text" value={props.query} onChange={(event) => props.handleSearchChange(event.target.value)} placeholder="Search by title or author" />
        </div>
    </div>
);

SearchBooksBar.propTypes = {
    query: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired
};

export default SearchBooksBar;
