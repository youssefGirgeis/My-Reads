import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from '../Components/Book';

export default function SearchBook({ updateShelfs }) {
  // list of books returned by the api when user searches a book
  const [searchedBooks, setSearchedBooks] = useState([]);
  // a message to be displayed if the book search is not successful
  const [error, setError] = useState('');

  /**
   * display a list of searched books on the page
   * @param {*} inputSearch : user's text
   */
  const findBook = (inputSearch) => {
    if (inputSearch.length > 0) {
      BooksAPI.search(inputSearch)
        .then((books) => {
          if (Array.isArray(books)) {
            setSearchedBooks((prevSearchedBooks) => [...books]);
            setError('');
          } else {
            setSearchedBooks((prevSearchedBooks) => []);
            setError('😢 Sorry, the book does not exist in the library 😢');
          }
        })
        .catch((err) => {
          setError(err);
        });
    } else {
      setSearchedBooks((prevSearchedBooks) => []);
    }
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            onChange={(e) => findBook(e.target.value.trim())}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <p className='book-error'>{error}</p>
        <ol className='books-grid'>
          {searchedBooks.map((book) => {
            book.shelf = 'none';
            return (
              <li key={book.id}>
                <Book
                  book={book}
                  bookTitle={book.title}
                  authors={book.authors}
                  imageLink={
                    book.imageLinks ? book.imageLinks.smallThumbnail : ''
                  }
                  updateShelfs={updateShelfs}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
