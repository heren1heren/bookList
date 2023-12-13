/* eslint-disable import/extensions */
import Book from './book.js'; // using export default so we can't have {} around the import variables
import UI from './UI.js'; // UI is a class from other file
import './style.css';
import './bootstrap.css';

const bookForm = document.querySelector('#book-form');

// Store Class: Handles Storage

// Event: display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = bookForm.querySelector('#title').value;
  const author = bookForm.querySelector('#author').value;

  const isbn = +bookForm.querySelector('#isbn').value;
  if (Number.isNaN(isbn)) {
    UI.showAlert('isbn must be a number', 'danger');
  } else { // using if else to check validity
    const book = new Book(title, author, isbn);
    UI.clearField(bookForm);
  }
});
// validating Form
// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});
