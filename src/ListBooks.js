import React from 'react';
import PropTypes from 'prop-types';

class ListBooks extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.books.map((book) => (
                        <li key={book.id}>{book.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ListBooks;
