// import * as BooksAPI from './BooksAPI';
import Book from './Book';

function BookShelf({ updateShelfs, shelfTitle, allBooks }) {
  // console.log(BooksAPI.update(allBooks[0], 'read'));
  console.log(allBooks);
  const changeBookShelf = (book, shelf) => {
    updateShelfs(book, shelf);
    console.log(book);
    console.log(shelf);
  };
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
                  book={book}
                  changeBookShelf={changeBookShelf}
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
