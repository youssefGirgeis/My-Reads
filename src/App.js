import { useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './Components/BookShelf';
import './App.css';

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  // const [crBooks, setCrBooks] = useState([]);
  // const [wtrBooks, setWtrBooks] = useState([]);
  // const [rBooks, setRBooks] = useState([]);

  //BooksAPI.getAll().then((books) => console.log(books));

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setAllBooks(books);
    });
  }, []);

  console.log(allBooks);

  return (
    <div className='app'>
      {showSearchPage ? (
        <div className='search-books'>
          <div className='search-books-bar'>
            <button
              className='close-search'
              onClick={() => this.setState({ showSearchPage: false })}
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
            />
            <BookShelf
              shelfTitle='Want to Read'
              allBooks={allBooks.filter((book) => book.shelf === 'wantToRead')}
            />
            <BookShelf
              shelfTitle='Read'
              allBooks={allBooks.filter((book) => book.shelf === 'read')}
            />
          </div>
          <div className='open-search'>
            <button onClick={() => this.setState({ showSearchPage: true })}>
              Add a book
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
