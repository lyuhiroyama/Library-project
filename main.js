const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + (read ? "read." : "not read.");
    }
}


function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("rod", "rodney mullen", 234, true);
addBookToLibrary("Kafka On The Shore", "Haruki Murakami", 2456, false);

function displayBookCards() {
    const bookCards = document.getElementById("book-cards");
    
    myLibrary.forEach(book => {
        const card = document.createElement("div");

        const title = document.createElement("h2");
        title.textContent = book.title;
        card.appendChild(title);

        const author = document.createElement("p");
        author.textContent = book.author;
        card.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = book.pages;
        card.appendChild(pages);

        const read = document.createElement("p");
        read.textContent = book.read;
        card.appendChild(read);

        bookCards.appendChild(card);
    });
}

displayBookCards()