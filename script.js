let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let isRead = document.querySelector('#isRead');
let submit = document.querySelector('.submit');
let add = document.querySelector('#add');

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

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary() {
    title = title.value
    author = author.value
    pages = pages.value


    if(isRead.checked) {
        isRead = isRead.value = 'yes'
    } else {
        isRead = isRead.value = 'no'
    }
    
    const newBook = new Book(title, author, pages, isRead)

    myLibrary.push(newBook);
    console.log(title, myLibrary);
}

