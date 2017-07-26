import React from 'react';
import PropTypes from 'prop-types';

// Shared stateless component that renders single book with its controls
const Book = (props) => (
    <div className="book">
        <div className="book-top">
            {props.book.imageLinks && <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})` }}></div>}
            <div className="book-shelf-changer">
                <select defaultValue={ props.book.shelf }
                        onChange={(e) => {
                            props.updateBook(props.book, e.target.value);
                        }}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{props.book.title}</div>
    </div>
);

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired
};

export default Book;
