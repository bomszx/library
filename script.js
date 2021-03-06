let submit = document.querySelector('.submit');
let container = document.querySelector('.book-container')
let form = document.querySelector('#form')
let cards = document.querySelectorAll('.book-card')
let isRead = document.querySelector('#isRead');

// Btn Event Listener
form.addEventListener('submit', addBookToLibrary)


// Library Array
let myLibrary = [];

// Object Constructor
function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}


// Function to add book to the Library
function addBookToLibrary(e) {
    e.preventDefault();
    const title = (document.querySelector('#title')).value;
    const author = (document.querySelector('#author')).value;
    const pages  = (document.querySelector('#pages')).value;

    isRead.checked ? isRead = isRead.value = 'yes' : isRead = isRead.value = 'no';
    
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    displayBooks(myLibrary);
    reset();

}

function reset() {
    form.reset();
}

// Function to display book
function displayBooks() {
    myLibrary.forEach(e => console.log(e))
}
displayBooks(myLibrary)