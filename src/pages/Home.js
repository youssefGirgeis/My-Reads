import { Link } from 'react-router-dom';

import BookShelf from '../Components/BookShelf';
import '../App.css';

export default function Home({ allBooks, updateShelfs }) {
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
