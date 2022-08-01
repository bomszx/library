let submit = document.querySelector('.submit');
let container = document.querySelector('.books-container')
let form = document.querySelector('#form')
let cards = document.querySelectorAll('.book-card')
let isRead = document.querySelector('#isRead');
let addBtn = document.querySelector('#add')
let modal = document.querySelector('.modal')

// Btn Event Listener
form.addEventListener('submit', addBookToLibrary)
addBtn.addEventListener('click', showModal)

// Library Array
let myLibrary = [
    {   
        title: 'Test',
        author: 'Test',
        pages: 23,
        isRead: 'no',
    },
    {   
        title: 'Test2',
        author: 'Test2',
        pages: 23,
        isRead: 'no',
    },
    {   
        title: 'Test3',
        author: 'Test3',
        pages: 23,
        isRead: 'no',
    },
];

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

function showModal() {
    modal.style.display = 'block'
}

window.onclick = function(event) {
    if (event.target == modal) {
        console.log(event)
      modal.style.display = 'none';
    }
  }

// Function to display book
function displayBooks() {
    // clears the div so we don't append the existing books again
    container.innerHTML = '';

    for(const book of myLibrary) {
        const card = document.createElement('div');
        card.classList.add('book-card')

        card.innerText = book.title;
        container.append(card)
    }
};
displayBooks(myLibrary)