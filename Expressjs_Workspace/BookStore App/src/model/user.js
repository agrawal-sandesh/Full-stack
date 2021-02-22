<<<<<<< Updated upstream
=======
<<<<<<< HEAD
const bookModel=require('../utilities/connection');

let createConnection = async() => {
    collection = await connection.getCollection();
}
//Import neccessary modules
let book = {}
//Insert a single document
book.addBook = async(bookObj)=> {
    let insertedData = await collection.create(bookObj)
=======
>>>>>>> Stashed changes
const bookModel=require('../utilities/connection').bookModel;

//Import neccessary modules
var book = {}
//Insert a single document
book.addBook = async(bookObj)=> {
    let insertedData = await bookModel.create(bookObj)
<<<<<<< Updated upstream
=======
>>>>>>> 55cd427f2e226a63544073201408cafe854b09d0
>>>>>>> Stashed changes
    if (insertedData) {
        return insertedData
    } else {
        let err = new Error("Data not inserted")
        err.status = 500
        throw err;
    }
}

let data = {
    bookId: 1001,
    bookName: "Think and Grow Rich",
    price: {
        "sub_users": 200,
        "non_sub_users": 300,
    },
    authorName: "Napoleon Hill",
    reference: ""
}

addBook = async(objectToBeInserted) => {
    try {
        let data = await book.addBook(objectToBeInserted)
        console.log(data);
    } catch (err) { console.log(err.message) }
}
addBook(data);



//Insert multiple document
book.multipleInsert = async(bookObj)=> {
<<<<<<< Updated upstream
    let insertedData = await bookModel.insertMany(bookObj)
=======
<<<<<<< HEAD
    let insertedData = await collection.insertMany(bookObj)
=======
    let insertedData = await bookModel.insertMany(bookObj)
>>>>>>> 55cd427f2e226a63544073201408cafe854b09d0
>>>>>>> Stashed changes
    if (insertedData) {
        return insertedData
    } else {
        let err = new Error("Data not inserted")
        err.status = 500
        throw err;
    }
}
//Array of movie object to be inserted
<<<<<<< Updated upstream
let data = [{
=======
<<<<<<< HEAD
let data1= [{
=======
let data = [{
>>>>>>> 55cd427f2e226a63544073201408cafe854b09d0
>>>>>>> Stashed changes
    bookId: 1002,
    bookName: "Leaves of Grass",
    price: {
        "sub_users": 275,
        "non_sub_users": 480,
    },
    authorName: "Walt Whiteman",
    reference: ""
}, {
    bookId: 1003,
    bookName: "The one King",
    price: {
        "sub_users": 300,
        "non_sub_users": 400,
    },
    authorName: "Killer and joy",
    reference: ""
}]
//Wrapping movie.multipleInsert into a new function
multipleInsert = async(objectToBeInserted) => {
    try {
        let data = await book.multipleInsert(objectToBeInserted)
        console.log(data);
    } catch (err) { console.log(err.message) }
}
//Calling multipleInsert method
<<<<<<< Updated upstream
multipleInsert(data);
=======
<<<<<<< HEAD
multipleInsert(data1);
=======
multipleInsert(data);
>>>>>>> 55cd427f2e226a63544073201408cafe854b09d0
>>>>>>> Stashed changes



//Retrive data based on bookId
book.getBook = (bookId) => {
<<<<<<< Updated upstream
    let bookDetails = await bookModel.findOne({ bookId: bookId });
=======
<<<<<<< HEAD
    let bookDetails = await collection.findOne({ bookId: bookId });
=======
    let bookDetails = await bookModel.findOne({ bookId: bookId });
>>>>>>> 55cd427f2e226a63544073201408cafe854b09d0
>>>>>>> Stashed changes
    if (bookDetails) { return bookDetails }
    else {
        let err = new Error("No record found");
        err.status = 404;
        throw err;
    }
}
//Wrapping movie.getMovie into a new function
findById = async () => {
    try {
        let data = await book.getBook(1003);
        console.log(data);
    }
    catch (err) {
        console.log(err.message);
    }
}
//Calling findById function
findById();


//Modify reference details of a book
book.updateBook = (obj) => {
<<<<<<< Updated upstream
    let updatedData = await bookModel.updateOne({ bookId: 1003 }, { $set: { reference: obj } }, { runValidators: true })
=======
<<<<<<< HEAD
    let updatedData = await collection.updateOne({ bookId: 1003 }, { $set: { reference: obj } }, { runValidators: true })
=======
    let updatedData = await bookModel.updateOne({ bookId: 1003 }, { $set: { reference: obj } }, { runValidators: true })
>>>>>>> 55cd427f2e226a63544073201408cafe854b09d0
>>>>>>> Stashed changes
    if (updatedData) { return updatedData }
    else {
        let err = new Error("Data not updated");
        err.status = 500;
        throw err;
    }
}
//Object to be added to the array
<<<<<<< Updated upstream
let Obj = "Hello there";
=======
<<<<<<< HEAD
let Obj1 = "Hello there";
=======
let Obj = "Hello there";
>>>>>>> 55cd427f2e226a63544073201408cafe854b09d0
>>>>>>> Stashed changes

//Wrapping movie.addShows into a new function
update = async (Obj) =>{
    try{
        let data = await book.updateBook(Obj);
        console.log(data);
    }
    catch(err) {
        console.log(err.message);
    }
//Calling update function
<<<<<<< Updated upstream
update(Obj);
=======
<<<<<<< HEAD
update(Obj1);
=======
update(Obj);
>>>>>>> 55cd427f2e226a63544073201408cafe854b09d0
>>>>>>> Stashed changes


}
//Delete details of a book based on bookId
book.removeBook = (id) => {
    let deletedData = await bookModel.deleteOne({ bookName: id })
    if (deletedData) { return deletedData }
    else {
        let err = new Error("Could not delete data");
        err.status = 500;
        throw err;
    }
}
//Wrapping the movie.removeShow into a new function
removeBook = async () => {
    try {
        let data = await book.removeBook("Leaves of Grass"); 
        console.log(data);
    }
    catch (err) {
        console.log(err.message);
    }
}
//Calling deleteShow function
removeBook();

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
createConnection();
=======
>>>>>>> 55cd427f2e226a63544073201408cafe854b09d0
>>>>>>> Stashed changes
module.exports = book;