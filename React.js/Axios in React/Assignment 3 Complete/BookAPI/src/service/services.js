const dbLayer = require('../model/dbLayer');

let service = {}

service.setupDB = async() => {
    let data = await dbLayer.setupDB();
    if (data) {
        return data;
    } else {
        let err = new Error("Data not inserted properly");
        err.status = 500;
        throw new Error;
    }
}

service.books = async() => {
    let data = await dbLayer.books();
    if (data) {
        return data;
    } else {
        let err = new Error("Data not found");
        err.status = 404;
        throw new Error;
    }
}

service.insertBook = async(bookObj) => {
    let data = await dbLayer.insertBook(bookObj)
    if (data && data.length > 0) {
        return data
    } else {
        let err = new Error("Book details not added");
        err.status = 400
        throw err
    }
}

module.exports = service;