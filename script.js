let myLibrary = [];
let container = document.querySelector('.container')
let button = document.querySelector('#btn');

function Book(name, author) {
    this.name = name;
    this.author = author;
};

function addBookToLibrary(obj) {
    myLibrary.push(obj);
};

console.log(myLibrary)

function display(book) {
    let newDiv = document.createElement('div');
    newDiv.className = ('newDiv');
    container.appendChild(newDiv);
    let titleDiv = document.createElement('div');
    newDiv.appendChild(titleDiv);
    let authorDiv = document.createElement('div');
    newDiv.appendChild(authorDiv);
    let name1 = `${book.name}`;
    let author1 = `${book.author}`; 
    titleDiv.innerHTML = name1;
    authorDiv.innerHTML = author1;
    let deleteBtn = document.createElement('button');
    authorDiv.after(deleteBtn);
};


button.addEventListener('click', ask);

function ask() {
    let titlePrompt = prompt("What's the title, mate?");
    let authorPrompt = prompt("Who's the author, lad?");
    let obj = new Book (titlePrompt, authorPrompt);
    addBookToLibrary(obj);
    display(obj);
}

