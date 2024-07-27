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
    
    myLibrary.forEach((book, index) => {
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

        const read = document.createElement("button");
        read.textContent = book.read ? "Read" : "Not Read";
        read.setAttribute("data-index", index);
        read.addEventListener("click", toggleReadStatus);
        card.appendChild(read);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove Book";
        removeButton.setAttribute("data-index", index);
        removeButton.addEventListener("click", removeBookFromLibrary);
        card.appendChild(removeButton);

        bookCards.appendChild(card);
    });
}

function toggleReadStatus(event) {
    const index = event.target.getAttribute("data-index");
    myLibrary[index].read = !myLibrary[index].read;
    displayBookCards();
}

function removeBookFromLibrary(event) {
    const index = event.target.getAttribute("data-index");
    myLibrary.splice(index, 1);
    displayBookCards();
}

const dialog = document.getElementById("dialog");
const newBookButton = document.getElementById("new-book-button");
const addBookButton = document.getElementById("add-book-button");

newBookButton.addEventListener("click", () => {
    dialog.open ? dialog.close() : dialog.showModal();
});

document.getElementById('close-button').addEventListener("click", () => {
    dialog.close();
});

addBookButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default form submission action. (Including page reload upon submission)

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    addBookToLibrary(title, author, pages, read);
    dialog.close();
})



