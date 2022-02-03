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

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setAllBooks((prevBooks) => {
        prevBooks = [...books];
        return prevBooks;
      });
    });
  }, []);

  console.log(allBooks);

  const updateShelfs = async (book, shelf) => {
    console.log('update shelfs', shelf);
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
