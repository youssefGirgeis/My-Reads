import BookShelfChanger from './BookShelfChanger';

function Book({ bookTitle, authors, imageLink }) {
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
        <BookShelfChanger />
      </div>
      <div className='book-title'>{bookTitle}</div>
      <div className='book-authors'>{authors}</div>
    </div>
  );
}

export default Book;
