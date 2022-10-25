let myLibrary = [];
let button = document.querySelector('#btn');
let bookDivs =  document.querySelector('.books');

function Book(name, author) {
    this.name = name;
    this.author = author;
    this.read = false;
};

function addBookToLibrary(obj) {
    myLibrary.push(obj);
};

function display(library) {
    bookDivs.textContent = '';
    library.forEach(function (prop) {
        const index = myLibrary.map(prop => prop.name).indexOf(`${prop.name}`);
        let bookDiv = document.createElement('div');
        bookDiv.className = "bookDiv"; 
        bookDivs.appendChild(bookDiv);
        let titleDiv = document.createElement('div');
        bookDiv.appendChild(titleDiv);
        let authorDiv = document.createElement('div');
        bookDiv.appendChild(authorDiv);
        titleDiv.innerHTML = `${prop.name}`;
        authorDiv.innerHTML = `${prop.author}`; 
        let deleteBtn = document.createElement('button');
        authorDiv.after(deleteBtn);
        deleteBtn.addEventListener('click', function(e) {
            e.target.parentNode.remove();
            library.splice(index, 1);
        });
        deleteBtn.textContent = "Delete the book!";
        let read = document.createElement('button');
        deleteBtn.after(read);
        if (prop.read === false) {
            read.style.backgroundColor = "red";
            read.textContent = "Never read it!";
        } if (prop.read === true) {
            read.style.backgroundColor = "green";
            read.textContent = "I've read it!";
        };
        read.addEventListener('click', () => {
        	console.log(prop.read);
            if (prop.read == false) {
            	prop.read = true;
                read.style.backgroundColor = "green";
                read.textContent = "I've read it!";
            } else if (prop.read == true) {
                prop.read = false;
                read.style.backgroundColor = "red";
                read.textContent = "Never read it!";
            };
        });
    });
};


button.addEventListener('click', ask);

function ask() {
    let titlePrompt = prompt("What's the title?");
    let authorPrompt = prompt("Who's the author?");
    let obj = new Book (titlePrompt, authorPrompt);
    addBookToLibrary(obj);
    display(myLibrary);
}

