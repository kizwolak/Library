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
