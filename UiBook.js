const bookList = document.querySelector('.books');
class UiBook {
  booksAdded = [];

  addBook(book) {
    this.booksAdded.push(book);
    this.#updateUI(book);
  }

  removeBook(book) {
    this.booksAdded = this.booksAdded
      .filter((bookitem) => bookitem.Author !== book.Author && bookitem.Title !== book.Title);

    this.#updateUI();
  }

  #updateUI() {
    // <li>Title: Title Of Book - <br> Author: Albert Someting </li>
    bookList.innerHTML = '';

    let bookHTML = '';
    for (let i = 0; i < this.booksAdded.length; i += 1) {
      const listItem = bookList.appendChild(document.createElement('li'));
      listItem.classList.add('my-book');
      bookHTML = `<div class = "book-info">- Title: <span>${this.booksAdded[i].Title}</span> by Author: <span>${this.booksAdded[i].Author}</span></div><button id=${i} class="removebtn" type="button">Remove</button></br><hr>`;
      listItem.innerHTML = bookHTML;
    }

    const removeBtns = document.querySelectorAll('.removebtn');

    removeBtns.forEach((removeBtn) => removeBtn.addEventListener('click', (ev) => {
      this.removeBook(this.booksAdded[ev.target.id]);
    }));

    localStorage.setItem('booksAdded', JSON.stringify(this.booksAdded));
  }
}

export default UiBook;