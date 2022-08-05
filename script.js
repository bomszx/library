let submit = document.querySelector('.submit');
let container = document.querySelector('.books-container')
let form = document.querySelector('#form')
let cards = document.querySelectorAll('.book-card')
let addBtn = document.querySelector('#add')
let modal = document.querySelector('.modal')


// Library Array
let myLibrary = [

    {
        title: 'The Lord of the Rings: The Return of the King',
        author: 'J.R.R Tolkien',
        pages: 417,
        isRead: false
   
    }
];

// Btn Event Listener
form.addEventListener('submit', addBookToLibrary);
addBtn.addEventListener('click', showModal);

// Object Constructor
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function reset() {
    form.reset();
}

// Remove book from myLibrary
function removeBook(i) {

    myLibrary.splice(i, 1)
}

// Shows modal when add book btn is pressed
function showModal() {
    modal.style.display = 'block';
}

function toggle(i) {
    if(myLibrary[i].isRead == false) {
        myLibrary[i].isRead = true;
    } else {
        myLibrary[i].isRead = false;
    }
}

// Function to add book to the Library
function addBookToLibrary(e) {
    e.preventDefault();

    // Declaring variables locally helped fixed the 'undefined' issue with globally declared variables
    const title = (document.querySelector('#title')).value;
    const author = (document.querySelector('#author')).value;
    const pages  = (document.querySelector('#pages')).value;
    let isRead = (document.querySelector('#isRead'))

    isRead.checked ? isRead = true : isRead = false;
    
    const newBook = new Book(title, author, pages, isRead);
    console.log(newBook)
    myLibrary.push(newBook);
    displayBooks(myLibrary);
    reset();
    modal.style.display = 'none';
    console.log(myLibrary)
}

// Function to display book
function displayBooks() {
    // Clears the div so we don't append the existing books again
    container.innerHTML = '';

    // Create Element for each book from our myLibrary Array
    myLibrary.forEach((book, i) => {
        const card = `<div class="book-card" data-index="${i}">
                        <div class="book-info">
                            <p>"${book.title}"</p>
                            <p>Author: ${book.author}</p>
                            <p>Pages: ${book.pages}</p>
                            <button class="isRead button">${book.isRead}</button>
                            <button class="remove button">Remove</button>
                            </div>
                        </div>`
        const element = document.createElement('div');
        element.innerHTML = card;

        // Append card to our book-container 'div'
        container.append(element);
    });
};

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

displayBooks(myLibrary);



// Function to toggle isRead status, targeted the parentNode of the btn to get the index of the said element and created the logic to toggle its value
container.addEventListener('click', function(e) {
    let index = e.target.parentNode.parentNode.dataset.index
        if(e.target.classList.contains('isRead')) {
            console.log(index)
        } else {
            return
        }
    })


// Used event delegation through class="book-card" to attach an event listener to our dynamically created element -- remove button
document.addEventListener('click', function(e) {
    if(e.target.classList.contains('remove')) {
        let parent = e.target.parentNode.parentNode.parentNode;
        removeBook(parent.index);
        parent.remove();
        console.log(parent.dataset.index)
        e.stopPropagation();
    } 
});




// Need to be strict that this function only runs if the button clicked is the one with class isRead