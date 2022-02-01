import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookShelf from '../Components/BookShelf';
import SearchBook from './SearchBook';
import '../App.css';

export default function Home() {
  //const [showSearchPage, setShowSearchPage] = useState(false);
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

  //   const showPage = (show) => {
  //     setShowSearchPage(show);
  //   };
  return (
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
        <Link to='/search'>Add book</Link>
      </div>
    </div>
  );
}
