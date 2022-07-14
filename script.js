let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let isRead = document.querySelector('#isRead');
let submit = document.querySelector('.submit')
let add = document.querySelector('#add');

console.log(submit)

submit.addEventListener('click', function(e) {
    console.log(title.value)
})

let myLibrary = [
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        author: 'J.R.R Tolkien',
        page: 423
    },
    {
        title: 'The Lord of the Rings: The Two Towers',
        author: 'J.R.R Tolkien',
        page: 352
    }
]

function addBookToLibrary() {

}
