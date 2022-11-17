let myLibrary = [];
let headerDivs = document.querySelector(".headerDivs");
let title = document.querySelector("#title");
let author = document.querySelector('#author');
let year = document.querySelector('#year');

class Book {

    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    addToLibrary = () => {
        myLibrary.push(this);
    }

    addToPage = () => {
        title.appendChild(document.createElement('div')).textContent = this.title;
        author.appendChild(document.createElement('div')).textContent = this.author;
        year.appendChild(document.createElement('div')).textContent = this.year;


    }

};

let HP = new Book ("HP", "JKR", "1999");
let LOTR = new Book ("LOTR", "JRRT", "1960s");

HP.addToLibrary();
HP.addToPage();

LOTR.addToLibrary();
LOTR.addToPage();