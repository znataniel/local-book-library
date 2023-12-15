function Book(bTitle, bAuthor, bPages, bRead) {
  this.title = bTitle;
  this.author = bAuthor;
  this.pages = bPages;
  this.hasBeenRead = bRead;

  this.bookInfo = () => {
    let info =
      this.title + " by " + this.author + ", " + this.pages + " pages, ";
    readStatus = this.hasBeenRead ? "read" : "not read";
    return info + readStatus;
  };
}

function addBook(title, author, pages, readStatus) {
  newBook = new Book(title, author, pages, readStatus);
  bookArray.push(newBook);
}

bookArray = new Array();
