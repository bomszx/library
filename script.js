let submit = document.querySelector('.submit');
let container = document.querySelector('.books-container')
let form = document.querySelector('#form')
let cards = document.querySelectorAll('.book-card')
let isRead = document.querySelector('#isRead');
let addBtn = document.querySelector('#add')
let modal = document.querySelector('.modal')

// Library Array
let myLibrary = [
    {
        title: 'test1',
        author: 'test1',
        pages: 25,
        isRead: 'no'
    },
    {
        title: 'test2',
        author: 'test2',
        pages: 25,
        isRead: 'no'
    },
    {
        title: 'test3',
        author: 'test3',
        pages: 25,
        isRead: 'no'
    }
];

// Btn Event Listener
form.addEventListener('submit', addBookToLibrary);
addBtn.addEventListener('click', showModal);

// Used event delegation through class="book-card" to attach an event listener to our dynamically created element -- remove button
container.addEventListener('click', function(e) {
    if(e.target.classList.contains('btn')) {

        //Find a way to get a cleaner code for this shit :))
        let parent = e.target.parentNode.parentNode.parentNode;
        parent.remove()
        console.log(parent.dataset.index)
    }
});

function removeBook(i) {
    myLibrary.splice(i, 1)
}

// Object Constructor
function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

// Function to display book
function displayBooks() {
    // Clears the div so we don't append the existing books again
    container.innerHTML = '';


    // Create Element for each book from our myLibrary Array
    myLibrary.forEach((book, i) => {
        const card = `<div class="book-card" data-index=${i}>
                        <div class="book-info">
                            <h3>${book.title}
                            <button class="btn">Remove</button>
                            </div>
                        </div>`
        const element = document.createElement('div');
        element.innerHTML = card;
        // Adding class to btn
        // btn.classList.add('.btn');

        // Append card to our book-container 'div'
        container.append(element);
    });
};

// Function to add book to the Library
function addBookToLibrary(e) {
    e.preventDefault();

    // Declaring variables locally helped fixed the 'undefined' issue with globally declared variables
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

// Shows modal when add book btn is pressed
function showModal() {
    modal.style.display = 'block';
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  displayBooks(myLibrary);