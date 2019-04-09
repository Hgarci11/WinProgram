class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    } 
    getSummary() {
        return `${this.title} was written by ${this.author} 
        in ${this.year}.`;
    }
    getAge() {
        const age = new Date().getFullYear() - this.year;
        return `${this.title} is ${age} years old.}`;
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
    static topBookStore() {
        return "Barnes & Noble";
    }
}

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    } 
}
const book = new Book("book one", "a Person", "2019");
const noot = new Book("Lerd Of the Rungs", "JJ Turken", "2001");
const boot = new Book();
boot.title = "new book";


console.log(book.getSummary());

const mag = new Magazine("mag one", "a dude", "2018", "April");

console.log(mag.getSummary());
console.log(book.getAge());

console.log(Book.topBookStore());