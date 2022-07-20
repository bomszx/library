let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let isRead = document.querySelector('#isRead');
let submit = document.querySelector('.submit');
let add = document.querySelector('#add');
let container = document.querySelector('.book-container')
let form = document.querySelector('#form')

// Btn Event Listener
submit.addEventListener('click', addBookToLibrary)


// Library Array
let myLibrary = []   // {
    //     title: 'The Lord of the Rings: The Fellowship of the Ring',
    //     author: 'J.R.R Tolkien',
    //     pages: 423,
    //     isRead: 'yes'
    // },
    // {
    //     title: 'The Lord of the Rings: The Two Towers',
    //     author: 'J.R.R Tolkien',
    //     pages: 352,
    //     isRead: 'no'/
    // },
    // {
    //     title: 'The lord of the Rings: The Return of the King',
    //     author: 'J.R.R Tolkien',
    //     pages: 416,
    //     isRead: 'no'
    // }


// Object Constructor
function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

// Function to display books
function displayBooks() {
    myLibrary.forEach(book => {
        const card = document.createElement('div')
        card.innerText = book.title
    
        container.append(card)
    })
}

// Function to add book to the Library
function addBookToLibrary(e) {
    e.preventDefault()
    title = title.value
    author = author.value
    pages = pages.value

    isRead.checked ? isRead = isRead.value = 'yes' : isRead = isRead.value = 'no';

    const newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook);
    console.log(myLibrary, newBook)
    displayBooks();
    form.reset()
}

displayBooks();