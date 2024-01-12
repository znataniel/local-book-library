class Book {
  constructor(bTitle, bAuthor, bPages, bRead) {
    this.title = bTitle;
    this.author = bAuthor;
    this.pages = bPages;
    this.hasBeenRead = Boolean(bRead);
  }

  bookinfo() {
    let info =
      this.title + " by " + this.author + ", " + this.pages + " pages, ";
    readStatus = this.hasBeenRead ? "read" : "not read";
    return info + readStatus;
  }
}

function addBook(title, author, pages, readStatus) {
  bookArray.push(new Book(title, author, pages, readStatus));
}

function addBookFromForm(e) {
  e.preventDefault();
  let emptyFlag = true;
  bookFormInput.forEach((b) => {
    if (b.type != "checkbox") {
      if (!b.value) {
        emptyFlag = false;
      }
    }
  });
  if (emptyFlag) {
    addBook(
      bookFormInput[0].value,
      bookFormInput[1].value,
      bookFormInput[2].value,
      bookFormInput[3].checked,
    );
  } else {
    alert("Please fill in the form.");
    return -1;
  }

  bookFormInput.forEach((b) => {
    b.value = "";
    if (b.type === "checkbox") {
      b.checked = false;
    }
  });

  clearBookStack();
  loadBookStack();
}

function loadBookStack() {
  bookArray.forEach((book) => {
    const newEntry = document.createElement("div");
    newEntry.classList.add("book");

    for (let val in book) {
      if (book.hasOwnProperty(val)) {
        let newVal;
        if (typeof book[val] === "boolean") {
          newVal = document.createElement("button");
          newVal.setAttribute("type", "button");
          newVal.textContent = book[val] ? "Yes" : "No";

          newVal.addEventListener("click", () => {
            book[val] = book[val] ? false : true;
            newVal.textContent = book[val] ? "Yes" : "No";
          });
        } else {
          newVal = document.createElement("p");
          newVal.textContent = book[val];
        }
        newEntry.appendChild(newVal);
      }
    }

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.textContent = "X";
    button.addEventListener("click", () => {
      bookStack.removeChild(newEntry);
      bookArray.pop(this);
    });
    newEntry.appendChild(button);

    bookStack.appendChild(newEntry);
  });
}

function clearBookStack() {
  const books = document.querySelectorAll("div.books .book");
  books.forEach((book) => {
    bookStack.removeChild(book);
  });
}

const bookStack = document.querySelector("div.books");
const bookFormInput = document.querySelectorAll("form.book-submit input");
const bookFormSubmit = document.querySelector(".book-submit button");
let bookArray = new Array();

bookFormSubmit.addEventListener("click", addBookFromForm);
