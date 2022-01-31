import { useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './Components/BookShelf';
import './App.css';

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
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
      {showSearchPage ? (
        <div className='search-books'>
          <div className='search-books-bar'>
            <button
              className='close-search'
              onClick={() => setShowSearchPage(false)}
            >
              Close
            </button>
            <div className='search-books-input-wrapper'>
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input type='text' placeholder='Search by title or author' />
            </div>
          </div>
          <div className='search-books-results'>
            <ol className='books-grid' />
          </div>
        </div>
      ) : (
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            <BookShelf
              shelfTitle='Currently Reading'
              allBooks={allBooks.filter(
                (book) => book.shelf === 'currentlyReading'
              )}
              updateShelfs={updateShelfs}
            />
            <BookShelf
              shelfTitle='Want to Read'
              allBooks={allBooks.filter((book) => book.shelf === 'wantToRead')}
              updateShelfs={updateShelfs}
            />
            <BookShelf
              shelfTitle='Read'
              allBooks={allBooks.filter((book) => book.shelf === 'read')}
              updateShelfs={updateShelfs}
            />
          </div>
          <div className='open-search'>
            <button onClick={() => setShowSearchPage(true)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
