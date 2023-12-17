Book.prototype.bookinfo = function () {
  let info = this.title + " by " + this.author + ", " + this.pages + " pages, ";
  readStatus = this.hasBeenRead ? "read" : "not read";
  return info + readStatus;
};

function Book(bTitle, bAuthor, bPages, bRead) {
  this.title = bTitle;
  this.author = bAuthor;
  this.pages = bPages;
  this.hasBeenRead = Boolean(bRead);
}

function addBook(title, author, pages, readStatus) {
  newBook = new Book(title, author, pages, readStatus);
  bookArray.push(newBook);
}

function updateBookStack() {
  bookArray.forEach((book) => {
    let newEntry = document.createElement("div");
    newEntry.classList.add("book");

    for (let val in book) {
      if (book.hasOwnProperty(val)) {
        const newVal = document.createElement("p");
        if (typeof book[val] === "boolean") {
          newVal.textContent = book[val] ? "Yes" : "No";
        } else {
          newVal.textContent = book[val];
        }
        newEntry.appendChild(newVal);
      }
    }

    bookStack.appendChild(newEntry);
  });
}

function clearBookStack() {
  const books = document.querySelectorAll("div.books .book");
  books.forEach((book) => {
    bookStack.removeChild(book);
  });
}

function loadDummyBooks() {
  addBook(
    "The Blank Slate: A Modern Denial of Human Nature",
    "Steven Pinker",
    197,
    false,
  );
  addBook("La Rebelion de Las Masas", "Jose Ortega & Gasset", 203, true);
  addBook("El Hombre Mediocre", "Jose Ingenieros", 112, false);
}

const bookStack = document.querySelector("div.books");
bookArray = new Array();
clearBookStack();
loadDummyBooks();
updateBookStack();
