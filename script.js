let myLibrary = [];
let test = document.querySelector('#test');

function Book(name, author) {
    this.name = name;
    this.author = author;
};

let HP = new Book ("HP", "JKR");

function addBookToLibrary(obj) {
    myLibrary.push(obj);
};

addBookToLibrary(HP);
console.log(myLibrary)

function display(library) {
    for (let book of library) {
        let name1 = `${book.name}`;
        let author1 = `${book.author}`; 
        test.innerHTML = (name1);
        test.innerHTML = (author1);
    };
};

display(myLibrary);