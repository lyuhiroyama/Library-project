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
    displayBookCards();
}

function displayBookCards() {
    const bookCards = document.getElementById("book-cards");
    bookCards.innerText = "";
    
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

// displayBookCards()

const newBookForm = document.getElementById("new-book-form");
const newBookButton = document.getElementById("new-book-button");

newBookButton.addEventListener("click", () => {
    newBookForm.style.display = newBookForm.style.display === 'none' ? 'block' : 'none';
});

newBookForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission action. (Including page reload)

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    addBookToLibrary(title, author, pages, read);
})

document.getElementById("dialog").show();
