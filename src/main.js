import Book from './book.js'; // using export default so we can't have {} around the import variables
import UI from './UI.js'; // UI is a class from other file
import './style.css';
import './bootstrap.css';
// book class: represents a book

// UI class: Handle UI Tasks
// Store Class: Handles Storage

// Event: display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book

// Event: Remove a Book
