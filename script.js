let myLibrary = [];
let title = document.querySelector('.title');
let author = document.querySelector('.author');

function Book(name, author) {
    this.name = name;
    this.author = author;
};

let HP = new Book ("HP", "JKR");
let LOTR = new Book ("LOTR", "JRRT");

function addBookToLibrary(obj) {
    myLibrary.push(obj);
};

addBookToLibrary(HP);
console.log(myLibrary)

function display(library) {
    for (let book of library) {
        let titleDiv = document.createElement('div');
        title.appendChild(titleDiv);
        let authorDiv = document.createElement('div');
        title.appendChild(authorDiv);
        let name1 = `${book.name}`;
        let author1 = `${book.author}`; 
        titleDiv.innerHTML += (name1);
        authorDiv.innerHTML += (author1);
    };
};

display(myLibrary);