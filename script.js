let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let isRead = document.querySelector('#isRead');
let submit = document.querySelector('.submit');
let add = document.querySelector('#add');
let container = document.querySelector('.book-container')

// Btn Event Listener
submit.addEventListener('click', addBookToLibrary)


// Library Array
let myLibrary = [
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        author: 'J.R.R Tolkien',
        pages: 423,
        isRead: 'yes'
    },
    {
        title: 'The Lord of the Rings: The Two Towers',
        author: 'J.R.R Tolkien',
        pages: 352,
        isRead: 'no'
    }
]

// Object Constructor
function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

// Function to add book to the Library
function addBookToLibrary() {
    title = title.value
    author = author.value
    pages = pages.value

    isRead.checked ? isRead = isRead.value = 'yes' : isRead = isRead.value = 'no'
    const newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook);
}

// Function to display books
myLibrary.forEach(book => {
    const card = document.createElement('div')
    card.innerText = book.title

    container.append(card)
})