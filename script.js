let myLibrary = [];
const addBookBtn = document.querySelector(".add-book-btn");
const addBookForm = document.querySelector(".add-book-form");
const submitBtn = document.querySelector("#submit-btn");

addBookBtn.addEventListener("click", createBook);
submitBtn.addEventListener("click", submitBook);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  displayBook();
}

function toggleInvisibility() {
  addBookBtn.classList.toggle("invisible");
  addBookForm.classList.toggle("invisible");
}
function displayBook() {
  let book = document.createElement("div"),
    bookTitle = document.createElement("h2"),
    bookAuthor = document.createElement("h3"),
    bookPages = document.createElement("h3"),
    bookRead = document.createElement("h3");

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
  for (let i = 0; i < myLibrary.length; i++) {
    bookTitle.textContent = myLibrary[i].title;
    bookAuthor.textContent = `By : ${myLibrary[i].author}`;
    bookPages.textContent = `${myLibrary[i].pages} pages`;
    bookRead.textContent = `Did read : ${myLibrary[i].read}`;
  }
}

function createBook() {
  toggleInvisibility();
}

function submitBook() {
  toggleInvisibility();
  let title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    pages = document.querySelector("#pages").value,
    read = document.querySelector("#read").value;

  addBookToLibrary(title, author, pages, read);
}
