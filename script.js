let myLibrary = [];
const addBookBtn = document.querySelector("#add-book-btn");
const addBookForm = document.querySelector("#add-book-form");
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
  let col = document.createElement("div");
  col.classList.add("col-4");
  document.querySelector("#book-container").appendChild(col);
  let card = document.createElement("div");
  card.classList.add("card");
  col.appendChild(card);
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  let bookTitle = document.createElement("h4"),
    bookAuthor = document.createElement("p"),
    bookPages = document.createElement("p"),
    bookRead = document.createElement("button");

  bookTitle.classList.add("card-title", "book-title", "text-center");
  bookAuthor.classList.add("card-text", "book-author");
  bookPages.classList.add("card-text", "book-pages");
  bookRead.classList.add("btn", "book-read");

  cardBody.appendChild(bookTitle);
  cardBody.appendChild(bookAuthor);
  cardBody.appendChild(bookPages);
  cardBody.appendChild(bookRead);

  let removeBtn = document.createElement("button");
  removeBtn.classList.add("btn", "btn-danger", "remove-btn");
  removeBtn.textContent = "Remove";
  cardBody.appendChild(removeBtn);

  removeBtn.addEventListener("click", () => {
    col.remove();
  });
  if (myLibrary.length === 1) {
    document.querySelector("#btn-container").appendChild(addBookBtn);
    document.querySelector("#btn-container").appendChild(addBookForm);
    addBookForm.classList.remove("col-4");
  }
  document
    .querySelector("#book-container")
    .appendChild(document.querySelector("#btn-container"));
  for (let i = 0; i < myLibrary.length; i++) {
    bookTitle.textContent = myLibrary[i].title;

    bookAuthor.textContent = `By : ${myLibrary[i].author}`;
    bookPages.textContent = `${myLibrary[i].pages} pages`;
    bookRead.textContent = `Did read : ${myLibrary[i].read}`;
    if (myLibrary[i].read === true) {
      bookRead.classList.add("bg-success");
    } else {
      bookRead.classList.add("bg-danger");
    }
    bookRead.addEventListener("click", () => {
      if (myLibrary[i].read === true) {
        myLibrary[i].read = false;
        bookRead.classList.remove("bg-success");
        bookRead.classList.add("bg-danger");
        bookRead.textContent = `Did read : ${myLibrary[i].read}`;
      } else {
        myLibrary[i].read = true;
        bookRead.classList.remove("bg-danger");
        bookRead.classList.add("bg-success");
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
  // document.querySelectorAll(".card").classList.add("invisible");
}

function submitBook() {
  let title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    pages = document.querySelector("#pages").value,
    read = document.querySelector("#read").checked;

  // document.querySelectorAll(".card").classList.remove("invisible");

  if (title === "" || author === "" || pages === "") {
    alert("Please fill all the fields");
  } else {
    toggleInvisibility();
    addBookToLibrary(title, author, pages, read);
  }
}
addBookBtn.addEventListener("click", createBook);
submitBtn.addEventListener("click", submitBook);
