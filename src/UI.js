export default class UI {
  static displayBooks() {
    const StoreBooks = [
      {
        title: 'book One',
        author: 'John Doe',
        isbn: '343433',
      },
      {
        title: 'book Two',
        author: 'sucker Doe',
        isbn: '343433',
      },
    ];
    const books = StoreBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
     
    `;
    list.appendChild(row);
  }

  static clearField(form) {
    form.querySelector('#title').value = '';
    form.querySelector('#author').value = '';
    form.querySelector('#isbn').value = '';
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`; // using booststrap ...
    const messageElement = document.createTextNode(message);
    div.appendChild(messageElement);

    const container = document.querySelector('.container');
    const existingDiv = container.querySelector('.alert');

    if (existingDiv) container.removeChild(existingDiv);
    const form = document.querySelector('#book-form'); // for insert method
    container.insertBefore(div, form);
  }

  static deleteBook(element) {
    if (element.classList.contains('delete')) {
      // delete the whole parent
      // what the heck is .remove() and parentElement -> so convenient
      element.parentElement.parentElement.remove();
    }
  }
}
