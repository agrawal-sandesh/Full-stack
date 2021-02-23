const express = require('express');
const routing = express.Router();
const service = require("../service/services.js");

routing.get("/setupDB", async(req, res, next) => {
    try {
        let data = await service.insertScript();
        if (data) {
            res.status(201)
            res.json({ message: "Inserted " + data + " document in database" })
        }
    } catch (err) { next(err) }
})

//Routing to get transactions details 
routing.get('/getPackages', async(req, res, next) => {
    try {
        let packageDetails = await service.getPackages()
        res.status(200)
        res.json(packageDetails)
    } catch (err) {
        next(err)
    }
})

routing.post('/customerDetail', async(req, res, next) => {
    let detailObj = req.body
    try {
        let resp = await service.takeDetail(detailObj);
        if (resp) {
            res.status(200)
            res.json({ message: "Successfully inserted the data of the customer" + detailObj.customerName })
        }
    } catch (err) { next(err) }
})

module.exports = routing;