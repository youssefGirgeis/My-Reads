import { useState } from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

export default function SearchBook({ showPage, updateShelfs }) {
  //const [inputSearch, setInputSearch] = useState('');
  const [searchedBooks, setSearchedBooks] = useState([]);

  const findBook = (inputSearch) => {
    BooksAPI.search(inputSearch).then((books) => {
      setSearchedBooks((prevSearchedBooks) => [...books]);
    });
  };

  console.log('Searched Books', searchedBooks);

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
