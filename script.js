let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let isRead = document.querySelector('#isRead');
let submit = document.querySelector('.submit');
let container = document.querySelector('.book-container')
let form = document.querySelector('#form')
let cards = document.querySelectorAll('.book-card')

// Btn Event Listener
submit.addEventListener('click', addBookToLibrary)


// Library Array
let myLibrary = [{
    title: 'Lord of the Rings: Fellowship of the Rings',
    author: 'J.R.R Tolkien',
    pages: 285,
    isRead: 'No'
}]

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
    title = title.value
    author = author.value
    pages = pages.value
    isRead.checked ? isRead = isRead.value = 'yes' : isRead = isRead.value = 'no';
    
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    // displayBooks();
    form.reset();
    console.table(myLibrary, title, author, pages);
}

// Function to display books
function displayBooks(library) {
    library.forEach(book => console.log(book))
}

displayBooks(myLibrary);
