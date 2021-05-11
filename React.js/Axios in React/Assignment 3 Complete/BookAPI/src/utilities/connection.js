const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const url = "mongodb://localhost:27017/BooksDB"


let schema = {
    title: { type: String, required: [true, 'Title name is required'] },
    author: { type: String, required: [true, 'Author name is required']},
    genre: { type: String, required: [true, 'Genre is required'] },
    summary: { type: String, required: [true, 'Summary is must'] },
    id: { type: Number}
}


let booksSchema = new Schema(schema, { collection: "Books", timestamps: true });


let connection = {}

connection.getCollection = async() => {
    try {
        return (await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })).model("Books", booksSchema)
    } catch (err) {
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    }
}

module.exports = connection