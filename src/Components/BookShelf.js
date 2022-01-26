import Book from './Book';

function BookShelf({ shelfTitle, allBooks }) {
  console.log(allBooks);
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelfTitle}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {allBooks.map((book) => {
            return (
              <li key={book.id}>
                <Book
                  bookTitle={book.title}
                  authors={book.authors}
                  imageLink={book.imageLinks.smallThumbnail}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
