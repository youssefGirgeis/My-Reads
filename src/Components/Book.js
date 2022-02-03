import { useState } from 'react';

import ShelfChanger from './ShelfChanger';

function Book({ updateShelfs, book, bookTitle, authors, imageLink }) {
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
        <ShelfChanger updateShelfs={updateShelfs} book={book} />
      </div>
      <div className='book-title'>{bookTitle}</div>
      <div className='book-authors'>{authors}</div>
    </div>
  );
}

export default Book;
