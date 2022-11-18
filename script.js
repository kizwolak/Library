let myLibrary = [];
const headerDivs = document.querySelector('.headerDivs');
const container = document.querySelector('.container');
const title = document.querySelector("#title");
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btns = document.querySelector('#btns');
const formBtn = document.querySelector('#formBtn');
const modal = document.querySelector('.modal');
const span = document.querySelector('.close');
const formSubmit = document.querySelector('#formSubmit');


class Book {

    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    addToLibrary = () => {
        myLibrary.push(this);
    }

    create = () => {
        let book = document.createElement('div');
        book.classList = "bookDiv";

        const addToPage = () => {
            container.appendChild(book);
            book.appendChild(document.createElement('div')).innerHTML = this.title;
            book.appendChild(document.createElement('div')).innerHTML = this.author;
            book.appendChild(document.createElement('div')).innerHTML = this.year;
        }
        const addReadButton = () => {
            let readBtn = document.createElement('button');
            readBtn.textContent = "Never read it!";
            readBtn.classList = ".btn";
            readBtn.style.backgroundColor = "red";
            readBtn.style.marginLeft = "1em"
            readBtn.addEventListener('click', () => {
                if (readBtn.textContent === "Never read it!") {
                    readBtn.textContent = "Read it!";
                    readBtn.style.backgroundColor = "green";
                }
                else {
                    readBtn.textContent = "Never read it!";
                    readBtn.style.backgroundColor = "red";
                }
            });
            book.appendChild(readBtn);
        };

        const addDeleteButton = () => {
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.classList = ".btn";
            deleteBtn.style.backgroundColor = "red";
            deleteBtn.style.marginLeft = "1em"
            deleteBtn.addEventListener('click', () => {
                
            });
            book.appendChild(deleteBtn);
        };
        
        addToPage();
        addRemoveButton();
        addDeleteButton();
    };
};


formBtn.addEventListener('click', () => {
    modal.style.display = "block";
});

span.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

formSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let formTitle = document.querySelector('#formTitle').value;
    let formAuthor = document.querySelector('#formAuthor').value;
    let formYear = document.querySelector('#formYear').value;
    let book = new Book(formTitle, formAuthor, formYear);
    book.create();
    modal.style.display = "none";
    formTitle.value = '';
    formAuthor.value = '';
    formYear.value = '';
});