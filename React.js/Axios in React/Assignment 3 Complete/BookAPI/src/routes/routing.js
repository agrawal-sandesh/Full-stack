const express = require('express');
const routing = express.Router();
const service = require('../service/services');
const Book=require('../model/book')

routing.get("/setupDB", async(req, res, next) => {
    try {
        let data = await service.setupDB();
        if (data) {
            res.status(201)
            res.json({ message: "Inserted document in database" })
        }
    } catch (err) { next(err) }
})

routing.get("/books", async(req, res, next) => {
    try {
        let data = await service.books();
        if (data) {
            res.status(201)
            res.json(data)
        }
    } catch (err) { next(err) }
})

routing.post("/addBook", async(req, res, next) => {
    let bookObj = new Book(req.body)
    try {
        let resp = await service.insertBook(bookObj);
        if (resp) {
            res.status(201)
            res.json({ message: bookObj.title+ " authored by " + bookObj.author+" was successfully inserted!" })
        }
    } catch (err) { next(err) }
})


module.exports = routing;