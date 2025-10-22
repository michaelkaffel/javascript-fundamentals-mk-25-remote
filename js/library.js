

class Book {
    constructor(title, author, available = true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }
}

const library = {
    books: [],
    addbook(title, author) {
        
        const book = new Book(title, author);
        library.books.push(book);
        console.log(`You have just added "${book.title}" by ${book.author} to the library!`)
        const output = document.getElementById('output');
        output.textContent = `You have just added "${book.title}" by ${book.author} to the library!`
    },
    checkOutBook(title) {
        try {
            let found = false;
            for (let book of this.books) {
                if (title === book.title) {
                    found = true;
                    book.available = false;
                    console.log(`You have checked out ${title}`);
                    const output = document.getElementById('output');
                    output.textContent = `You have checked out ${title}`
                    break
                }
            }
            if (!found) throw new Error(`The book "${title}" is not in our system or is checked out`)
        } catch (err) {
            console.log(`${err.message}`)
            const output = document.getElementById('output');
                    output.textContent = `The book "${title}" is not in our system or is checked out`
        }

    },
    getAvailableBooks() {
        console.log(this.books)
        const output = document.getElementById('output');
                    output.textContent = this.books
    },

}

function receiveBooks(bookData) {
    let parsedBookData = JSON.parse(bookData);
    for (let data of parsedBookData) {
        library.addbook(data.title, data.author)
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



