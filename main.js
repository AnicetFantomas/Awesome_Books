import UiBook from './UiBook.js';

const titleInput = document.querySelector('#title');
const AuthorInput = document.querySelector('#author');
const getForm = document.querySelector('#books-form');

class Book {
  constructor(Author, Title) {
    this.Author = Author;
    this.Title = Title;
  }
}

const myUiBook = new UiBook();
getForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const author = AuthorInput.value;

  const myBook = new Book(author, title);

  titleInput.value = '';
  AuthorInput.value = '';

  myUiBook.addBook(myBook);
});

// we can load the items from localstore
const localstoreBooks = localStorage.getItem('booksAdded');
const bookObjects = JSON.parse(localstoreBooks);
if (bookObjects !== null) {
  bookObjects.forEach((book) => myUiBook.addBook(book));
}

// we have parse the items from localstorage to JSON js objects
// loop thru the array and add the books on the view