import { useState } from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

export default function SearchBook({ showPage, updateShelfs }) {
  //const [inputSearch, setInputSearch] = useState('');
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [error, setError] = useState('');

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
          console.log('Error:: ', err);
        });
    } else {
      setSearchedBooks((prevSearchedBooks) => []);
      setError('Please type a book title or author name 📗');
    }
  };

  console.log('Searched Books', searchedBooks);
  console.log(searchedBooks.length);

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <button className='close-search' onClick={() => showPage(false)}>
          Close
        </button>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            onChange={(e) => findBook(e.target.value)}
            // value={inputSearch}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <p className='book-error'>{error}</p>
        <ol className='books-grid'>
          {searchedBooks.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                bookTitle={book.title}
                authors={book.authors}
                imageLink={book.imageLinks.smallThumbnail}
                updateShelfs={updateShelfs}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
