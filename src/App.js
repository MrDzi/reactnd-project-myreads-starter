import React from 'react';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';
import './App.css';

class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks />
                )} />
                <Route path="/search" render={() => (
                    <SearchBooks />
                )} />
            </div>
        )
    }
}

export default BooksApp;
