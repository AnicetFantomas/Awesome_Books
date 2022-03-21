const titleInput = document.querySelector("#title");
const AuthorInput = document.querySelector("#author");
const getForm = document.querySelector("#books-form");
const bookList = document.querySelector('.books');


class book  {
   constructor (Author, Title) {
    this.Author = Author;
    this.Title = Title;
   } 
};

class UiBook {
   booksAdded = [];
   addBook (book) {
      this.booksAdded.push(book);
      this.#updateUI(book);
   };

   removeBook (book) {
      this.booksAdded = this.booksAdded.filter( bookitem => bookitem.Author !== book.Author && bookitem.Title !== book.Title );
      this.#updateUI();
   };

   #updateUI() {
      //<li>Title: Title Of Book - <br> Author: Albert Someting </li>
      bookList.innerHTML ="";
      console.log(this.booksAdded);
      
      let bookHTML ="";
      for (let i = 0; i < this.booksAdded.length; i += 1){
         const listItem = bookList.appendChild(document.createElement('li'));
         listItem.classList.add('my-book');
         bookHTML = 'Title: '+this.booksAdded[i].Title+' - <br> Author: '+this.booksAdded[i].Author +'<br><button id='+i+' class="removebtn" type="button">Remove</button><hr>';
         listItem.innerHTML = bookHTML;
      }
      
      const removeBtns = document.querySelectorAll('.removebtn');
      
      removeBtns.forEach(removeBtn => removeBtn.addEventListener('click', (ev) => {
         this.removeBook(this.booksAdded[ev.target.id]);
      }))
   }
}

const myUiBook = new UiBook()
getForm.addEventListener('submit', (event) => {
   event.preventDefault();

   let title = titleInput.value;
   let author = AuthorInput.value;

   const myBook = new book(author, title);

   myUiBook.addBook(myBook);

});










