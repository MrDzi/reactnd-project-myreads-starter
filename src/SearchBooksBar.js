import React from 'react'
import { Link } from 'react-router-dom'

const SearchBooksBar = (props) => (
    <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
            <input type="text" value={props.query} onChange={(event) => props.handleSearchChange(event.target.value)} placeholder="Search by title or author" />
        </div>
    </div>
);

export default SearchBooksBar;
