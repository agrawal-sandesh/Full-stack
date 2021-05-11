const initialData = require("./db.json")
const connection = require("../utilities/connection")

let createConnection = async() => {
    collection = await connection.getCollection();
}

let model = {}

model.setupDB = async() => {
    await collection.deleteMany();
    let response = await collection.insertMany(initialData);
    if (response && response.length > 0) {
        return response
    } else {
        let err = new Error("Script insertion failed")
        err.status = 500
        throw err
    }
}

model.books = async() => {
    let response = await collection.find();
    if (response && response.length > 0) {
        return response
    } else {
        let err = new Error("Data not found")
        err.status = 404
        throw err
    }
}

model.insertBook = async(bookObj) => {
    let response = await collection.insertMany(bookObj);
    if (response && response.length > 0) {
        return response;
    } else {
        let err = new Error("Object insertion failed")
        err.status = 500
        throw err
    }
}

createConnection();
module.exports = model;