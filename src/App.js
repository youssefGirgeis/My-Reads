import { useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './Components/BookShelf';
import SearchBook from './Components/SearchBook';
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

  const showPage = (show) => {
    setShowSearchPage(show);
  };

  // const findBook = (inputSearch) => {
  //   console.log(inputSearch);
  //   // BooksAPI.search(inputSearch).then((books) => {
  //   //   console.log(books);
  //   //   console.log(typeof books);
  //   // });
  // };

  //console.log('searched books', searchedBooks);

  return (
    <div className='app'>
      {showSearchPage ? (
        <SearchBook showPage={showPage} updateShelfs={updateShelfs} />
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
