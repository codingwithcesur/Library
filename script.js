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
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
// for (let i = 0; i < myLibrary.length; i++) {
//   console.log(myLibrary[i]);
// }
