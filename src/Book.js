import React from 'react'

const Book = (props) => (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
                <select defaultValue={ props.book.shelf } onChange={(e) => {
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
        <div className="book-authors">
            {props.book.authors.map((author, index) => (
                <span key={index}>{author}</span>
            ))}
        </div>
    </div>
);

export default Book;
