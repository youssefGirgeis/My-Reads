import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as BooksAPI from '../BooksAPI';
import Book from '../Components/Book';

export default function SearchBook({ updateShelfs }) {
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
