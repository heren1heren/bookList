/* eslint-disable import/extensions */
import Store from './store.js';
import Book from './book.js'; // using export default so we can't have {} around the import variables
import UI from './UI.js'; // UI is a class from other file
import './style.css';
import './bootstrap.css';

const bookForm = document.querySelector('#book-form');
const handleSubmit = function handleWith(title, author, isbn) {
  if (Number.isNaN(isbn)) {
    UI.showAlert('isbn must be a number', 'danger');
  } else if (title === '' || author === '' || isbn === '') {
    UI.showAlert('please fill in the field', 'danger');
  } else {
    // using if else to check validity
    UI.showAlert('Book Added', 'success');
    const book = new Book(title, author, isbn);
    // display book UI
    UI.addBookToList(book);
    // Add book to store
    Store.addBook(book);
    // Clear field
    UI.clearField(bookForm);
  }
};
// Store Class

// Event: display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = bookForm.querySelector('#title').value;
  const author = bookForm.querySelector('#author').value;
  const isbn = +bookForm.querySelector('#isbn').value;
  handleSubmit(title, author, isbn);
});
// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    // UI remove
    UI.deleteBook(e.target);
    UI.showAlert('deleted a book', 'success');
    // Remove book from store
    const isbn = +e.target.parentElement.previousElementSibling.textContent;
    Store.removeBook(isbn);
  }
});
