import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
//pages
import Home from './pages/Home';
import SearchBook from './pages/SearchBook';
import Error from './pages/Error';

// styles
import './App.css';

function App() {
  const [allBooks, setAllBooks] = useState([]);

  // get all books once components is rendered (the first render)
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setAllBooks((prevBooks) => {
        prevBooks = [...books];
        return prevBooks;
      });
    });
  }, []);

  /**
   * update book's shelf
   * @param {*} book : selected by user and moved to a different shelf
   * @param {*} shelf : the new shelf the book moved to
   */
  const updateShelfs = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((updatedBooks) => {
      setAllBooks((prevBooks) => {
        prevBooks = [...updatedBooks];
        return prevBooks;
      });
    });
  };

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home allBooks={allBooks} updateShelfs={updateShelfs} />
          </Route>

          <Route path='/search'>
            <SearchBook updateShelfs={updateShelfs} />
          </Route>

          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
