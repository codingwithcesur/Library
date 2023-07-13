let myLibrary = [];
const addBookBtn = document.querySelector(".add-book-btn");
const addBookForm = document.querySelector(".add-book-form");
const submitBtn = document.querySelector("#submit-btn");

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

function displayBook() {
  let book = document.createElement("div"),
    bookTitle = document.createElement("h2"),
    bookAuthor = document.createElement("h3"),
    bookPages = document.createElement("h3"),
    bookRead = document.createElement("button");

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

  let removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.textContent = "Remove";
  book.appendChild(removeBtn);

  removeBtn.addEventListener("click", () => {
    book.remove();
  });
  document.querySelector(".book-container").appendChild(addBookBtn);
  document.querySelector(".book-container").appendChild(addBookForm);
  for (let i = 0; i < myLibrary.length; i++) {
    bookTitle.textContent = myLibrary[i].title;
    bookAuthor.textContent = `By : ${myLibrary[i].author}`;
    bookPages.textContent = `${myLibrary[i].pages} pages`;
    bookRead.textContent = `Did read : ${myLibrary[i].read}`;
    if (myLibrary[i].read === true) {
      bookRead.style.backgroundColor = "green";
    } else {
      bookRead.style.backgroundColor = "red";
    }
    bookRead.addEventListener("click", () => {
      if (myLibrary[i].read === true) {
        myLibrary[i].read = false;
        bookRead.style.backgroundColor = "red";
        bookRead.textContent = `Did read : ${myLibrary[i].read}`;
      } else {
        myLibrary[i].read = true;
        bookRead.style.backgroundColor = "green";
        bookRead.textContent = `Did read : ${myLibrary[i].read}`;
      }
    });
  }
}

function toggleInvisibility() {
  addBookBtn.classList.toggle("invisible");
  addBookForm.classList.toggle("invisible");
}

function createBook() {
  toggleInvisibility();
}

function submitBook() {
  toggleInvisibility();
  let title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    pages = document.querySelector("#pages").value,
    read = document.querySelector("#read").checked;

  addBookToLibrary(title, author, pages, read);
}
addBookBtn.addEventListener("click", createBook);
submitBtn.addEventListener("click", submitBook);
