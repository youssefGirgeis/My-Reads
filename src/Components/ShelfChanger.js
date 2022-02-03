export default function ShelfChanger({ updateShelfs, book }) {
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(book);
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
