class Book {
    constructor(obj) {
        this.title = obj.title;
        this.author = obj.author;
        this.genre = obj.genre;
        this.summary = obj.summary;
    }
}

module.exports = Book;