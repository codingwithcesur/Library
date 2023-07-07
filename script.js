let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let book = document.createElement("div");
    let bookTitle = document.createElement("h2");
    let bookAuthor = document.createElement("h3");
    let bookPages = document.createElement("h3");
    let bookRead = document.createElement("h3");

    book.classList.add("book");
    bookTitle.classList.add("book-title");
    bookAuthor.classList.add("book-author");
    bookPages.classList.add("book-pages");
    bookRead.classList.add("book-read");

    document.querySelector(".book-container").appendChild(book);
    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookPages);
    book.appendChild(bookRead);

    bookTitle.textContent = myLibrary[i].title;
    bookAuthor.textContent = `By : ${myLibrary[i].author}`;
    bookPages.textContent = `${myLibrary[i].pages} pages`;
    bookRead.textContent = `Did read : ${myLibrary[i].read}`;
  }
}
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
// addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", 423, true);
// addBookToLibrary("The Two Towers", "J.R.R. Tolkien", 352, true);
// displayBooks();
