import React from 'react';
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
// import PropTypes from 'prop-types';

class ListBooks extends React.Component {
    // static propTypes = {
    //     books: PropTypes.array.isRequired
    // }
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books });
        });
    }
    render() {
        return (
            <div>
                <BookShelf title="Currently Reading" books={this.state.books.filter(book => {
                    return book.shelf === 'currentlyReading'
                })} />
                <BookShelf title="Want To Read" books={this.state.books.filter(book => {
                    return book.shelf === 'wantToRead'
                })} />
                <BookShelf title="Read" books={this.state.books.filter(book => {
                    return book.shelf === 'read'
                })} />
            </div>
        )
    }
}

export default ListBooks;
