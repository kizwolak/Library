let myLibrary = [];
let headerDivs = document.querySelector('.headerDivs');
let container = document.querySelector('.container');
let title = document.querySelector("#title");
let author = document.querySelector('#author');
let year = document.querySelector('#year');
let btns = document.querySelector('#btns');


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
        const addRemoveButton = () => {
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
        
        addToPage();
        addRemoveButton();
    };


};

let HP = new Book ("HP", "JKR", "1999");
let LOTR = new Book ("LOTR", "JRRT", "1960s");

HP.create();

LOTR.create();