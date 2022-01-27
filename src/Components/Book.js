import { useState } from 'react';

function Book({ changeBookShelf, book, bookTitle, authors, imageLink }) {
  const [bookStatus, setBookStatus] = useState('');

  const handleChange = (e) => {
    //console.log(e.target.value);
    //console.log(book);
    setBookStatus(e.target.value);
    changeBookShelf(book, e.target.value);
  };
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url('${imageLink}')`,
          }}
        />
        <div className='book-shelf-changer'>
          <select onChange={handleChange} value={book.shelf}>
            <option value='move' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{bookTitle}</div>
      <div className='book-authors'>{authors}</div>
    </div>
  );
}

export default Book;
