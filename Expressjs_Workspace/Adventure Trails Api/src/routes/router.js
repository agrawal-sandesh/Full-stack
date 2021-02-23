const express = require('express');
const routing = express.Router();
const dbLayer = require('../models/dbLayer')

routing.get("/setupDB", async(req, res, next) => {
    try {
        let data = await dbLayer.insertScript();
        if (data) {
            res.status(201)
            res.json({ message: "Inserted " + data + " document in database" })
        }
    } catch (err) { next(err) }
})

routing.get('/getPackages', async(req, res, next) => {
    try {
        let packageDetails = await dbLayer.getPackages()
        if (packageDetails) {
            res.status(200)
            res.json(packageDetails)
        }
    } catch (err) {
        next(err)
    }
})

routing.post('/customerDetails', async(req, res, next) => {
    let detailObj = req.body
    try {
        let resp = await dbLayer.submitDetails(detailObj);
        if (resp) {
            res.status(200)
            res.json({ "message": "Successfully inserted the data of the customer: " + resp })
        }
    } catch (err) { next(err) }
})

module.exports = routing;