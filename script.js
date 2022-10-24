let myLibrary = [];
let container = document.querySelector('.container')
let button = document.querySelector('#btn');
let titles = document.querySelector(".title");
let authors = document.querySelector(".author");

function Book(name, author) {
    this.name = name;
    this.author = author;
};

function addBookToLibrary(obj) {
    myLibrary.push(obj);
};

function display(library) {
    library.forEach(function (prop) {
        let bookDiv = document.createElement('div');
        bookDiv.className = "bookDiv"; 
        container.appendChild(bookDiv);
        let titleDiv = document.createElement('div');
        bookDiv.appendChild(titleDiv);
        let authorDiv = document.createElement('div');
        bookDiv.appendChild(authorDiv);
        let name1 = `${prop.name}`;
        let author1 = `${prop.author}`; 
        titleDiv.innerHTML = name1;
        authorDiv.innerHTML = author1;
        let deleteBtn = document.createElement('button');
        authorDiv.after(deleteBtn);
        const index = myLibrary.map(prop => prop.name).indexOf(`${prop.name}`)
        deleteBtn.addEventListener('click', function(e) {
            e.target.parentNode.remove();
            library.splice(index, 1);
        });
        deleteBtn.textContent = "Delete the book, bro!";
        let read = document.createElement('button');
        deleteBtn.after(read);
        read.textContent = "Never read it, pal!";
    });
};


button.addEventListener('click', ask);

function ask() {
    let titlePrompt = prompt("What's the title, mate?");
    let authorPrompt = prompt("Who's the author, lad?");
    let obj = new Book (titlePrompt, authorPrompt);
    addBookToLibrary(obj);
    display(myLibrary);
}

