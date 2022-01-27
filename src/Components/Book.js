function Book({ changeBookShelf, book, bookTitle, authors, imageLink }) {
  const handleChange = (e) => {
    //console.log(e.target.value);
    //console.log(book);
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
          <select onChange={handleChange}>
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
