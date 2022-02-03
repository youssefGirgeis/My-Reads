export default function ShelfChanger({ updateShelfs, book }) {
  /**
   * handles user changes when they desire to move a book from one shelf to another
   * @param {*} e: event
   */
  const handleChange = (e) => {
    updateShelfs(book, e.target.value);
  };

  return (
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
  );
}
