# My Reads: Book Tracking App

## About

MyReads is a project from Udacity's React Nanodegree course. This is a bookshelf app that lets you to organize books that you have read.
This project emphasizes the use of React with a given API server. The starter template provided by Udacity contains the CSS and HTML for the project but no React.
I was able to create and build the React components to populate the main page and search page with books. THe main page has three shelves that users are able to move the books between shelves. The search page allows users to search for new books to add to their shelves. Upon selecting a book to add to shelves, when you navigate back to the home page, you can immeditately view the selections made on the search page. This project uses React's Hooks to manage state and build the functionality to move books from one shelf to another.

## Getting Started

1. Clone the project: open a terminal and type clone https://github.com/youssefGirgeis/My-Reads.git
2. Navigate to the root directory of the project: cd My-Reads
3. Install dependencies: npm install
4. Launch the app: npm start

## Folder Struture

├─src/
│ 　 ├─Components/
│ 　 │ 　 ├─Book.js
│ 　 │ 　 ├─BookShelf.js
│ 　 │ 　 └─ShelfChanger.js
│ 　 ├─icons/
│ 　 │ 　 ├─add.svg
│ 　 │ 　 ├─arrow-back.svg
│ 　 │ 　 └─arrow-drop-down.svg
│ 　 ├─pages/
│ 　 │ 　 ├─Error.js
│ 　 │ 　 ├─Home.js
│ 　 │ 　 └─SearchBook.js
│ 　 ├─App.css
│ 　 ├─App.js
│ 　 ├─App.test.js
│ 　 ├─BooksAPI.js
│ 　 ├─index.css
│ 　 └─index.js

## Features

- Ability to move books between shelfs
- Search and add new books your shelfs
- Delete books from shelfs
- If book is on a shelf on the main page and that book appears on the search page, the correct shelf is selected on the search page. If that book's shelf is changed on the search page, that change is reflected on the main page as well

## Built with

- React
- Create React App
- React Router
- JavaScript
- HTML5
- CSS3
- VScode

## Search Limitation

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in search terms below. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

### Search Terms

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
