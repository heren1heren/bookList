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
}
