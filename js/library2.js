class Book {
    constructor(title, author, available = true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }
}

const library = {
    books: [],
    addBook(title, author) {
        const book = new Book(title, author)
        this.books.push(book);
        console.log(`This book has been added: "${book.title}"`)
    },
    checkOutBook(title) {
        let found = false;
        try {
            for (let book of this.books) {
                if (title === book.title && book.available) {
                    book.available = false;
                    found = true;
                    console.log(`You have checked out "${book.title}".`);
                    break;
                }
            } if (!found) throw new Error(`Book is not found or is checked out`)
        } catch (err) {
            console.log(`CATCH ${err}`)
        }
    },
    getAvailableBooks() {
        if (this.books.length > 0) {
            console.log(`The books in our database are:`)
            for (let book of this.books) {
                console.log(`"${book.title}" by ${book.author}`)
            }
        } else {
            console.log(`Sorry, no books in our database.`)
        }
    }

}

function receiveBooks(bookData) {
    let parsedBookData = JSON.parse(bookData)
    console.log(`Book data parsed`)
    for (let bookdatam of parsedBookData) {

        library.addBook(bookdatam.title, bookdatam.author)
    }

}

const newBooks = `
[
  {"title": "Eloquent JavaScript", "author": "Marijn Haverbeke"},
  {"title": "JavaScript: The Good Parts", "author": "Douglas Crockford"},
  {"title": "You Don't Know JS: Scope & Closures", "author": "Kyle Simpson"},
  {"title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript", "author": "David Herman"},
  {"title": "JavaScript Patterns", "author": "Stoyan Stefanov"},
  {"title": "Programming JavaScript Applications", "author": "Eric Elliott"},
  {"title": "Functional JavaScript", "author": "Michael Fogus"},
  {"title": "JavaScript: The Definitive Guide", "author": "David Flanagan"},
  {"title": "Learning JavaScript Design Patterns", "author": "Addy Osmani"},
  {"title": "Node.js Design Patterns", "author": "Mario Casciaro"}
]
`;




// const book1 = new Book("Harry Potter", "J.K. Rowling");
// library.addBook(book1);



// library.getAvailableBooks();

// receiveBooks(newBooks);

// library.checkOutBook("");


console.log(`There are currently ${library.books.length} books in the library's database.`);
library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
receiveBooks(newBooks);
library.checkOutBook("Eloquent JavaScript");
library.checkOutBook("Grokking the Coding Interview");
library.getAvailableBooks();