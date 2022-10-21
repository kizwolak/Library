let myLibrary = [];
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let button = document.querySelector('#btn');

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
addBookToLibrary(LOTR);

console.log(myLibrary)

function display(book) {
        let titleDiv = document.createElement('div');
        title.appendChild(titleDiv);
        let authorDiv = document.createElement('div');
        author.appendChild(authorDiv);
        let name1 = `${book.name}`;
        let author1 = `${book.author}`; 
        titleDiv.innerHTML = name1;
        authorDiv.innerHTML = author1;
};


button.addEventListener('click', ask);

function ask() {
    let titlePrompt = prompt("What's the title, mate?");
    let authorPrompt = prompt("Who's the author, lad?");
    let obj = new Book (titlePrompt, authorPrompt);
    addBookToLibrary(obj);
    display(obj);
}