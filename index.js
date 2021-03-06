import UiBook from './modules/UiBook.js';
import { DateTime } from './modules/luxon.js';

const titleInput = document.querySelector('#title');
const AuthorInput = document.querySelector('#author');
const getForm = document.querySelector('#books-form');

// ---- links for single page app -------------

const listLink = document.querySelector('#list');
const addNewLink = document.querySelector('#add-new');
const contactUsLink = document.querySelector('#contact');
const notificationMessage = document.querySelector('#message');
const wrapperSections = document.querySelectorAll('.wrapper');

// --------- Single Page App function-------------------

listLink.addEventListener('click', () => {
  wrapperSections.forEach((section) => {
    if (section.id !== 'book-list-content') {
      section.classList.add('hidden');
    } else {
      section.classList.remove('hidden');
    }
  });
});

addNewLink.addEventListener('click', () => {
  wrapperSections.forEach((section) => {
    if (section.id !== 'add-book') {
      section.classList.add('hidden');
    } else {
      section.classList.remove('hidden');
    }
  });
});

contactUsLink.addEventListener('click', () => {
  wrapperSections.forEach((section) => {
    if (section.id !== 'contact-us') {
      section.classList.add('hidden');
    } else {
      section.classList.remove('hidden');
    }
  });
});

// --------------- Book list ----------------

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
  notificationMessage.textContent = 'Your Book and author have been saved successfully!!';

  setTimeout(() => {
    notificationMessage.textContent = '';
  }, 3000);
});

// we can load the items from localstore
const localstoreBooks = localStorage.getItem('booksAdded');
const bookObjects = JSON.parse(localstoreBooks);
if (bookObjects !== null) {
  bookObjects.forEach((book) => myUiBook.addBook(book));
}

// -----------date----------

const myDate = document.querySelector('.date');

const displayDate = () => {
  window.setInterval(
    () => {
      myDate.innerHTML = `${DateTime.local().toLocaleString(
        DateTime.DATETIME_MED_WITH_SECONDS,
      )}`;
    },
    1000,
    this,
  );
};
displayDate();
