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
        const card = `<div class=book-card>
                            <div class="card-info-wrapper">
                                <h2>${book.title}</h2>
                                <h3>${book.author}</h3>
                                <h4>${book.pages}</h4>
                                <p>Have you read this book? ${book.isRead}</p>
                                <div class="button>
                                    Remove
                                </div>
                            </div>
                        </div>`

        const element = document.createElement('div')
        element.innerHTML = card;
        container.append(element);
    }
};
displayBooks(myLibrary)