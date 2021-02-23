const express = require('express');
const routing = express.Router();
const dbLayer = require("../models/dbLayer");

routing.post("/dataInsert", async(req, res, next) => {
    let insertedData = req.body
    try {
        let resp = await dbLayer.insertScript(insertedData);
        if (resp) {
            res.status(200)
            res.json({ message: "Data Inserted Successfully " })
        }
    } catch (err) { next(err) }
})

routing.get("/getShowDetails", async(req, res, next) => {
    try {
        let resp = await dbLayer.getShowDetails();
        if (resp) {
            res.status(200)
            res.json(resp)
        }
    } catch (err) { next(err) }

})

routing.post("/checkShow", async(req, res, next) => {
    try {
        let showId = req.body.showId;
        let resp = await dbLayer.checkShowId(showId)
        if (resp) {
            res.status(200)
            res.json({ "message": "Movie with showid " + resp + " is available" });
        }
    } catch (err) {
        res.status(404)
        res.json({ "message": "show not found" })
    }

})

routing.post("/bookShow", async(req, res, next) => {
    try {
        let showId = req.body.showId;
        let noofSeats = req.body.noofSeats;
        let bookingId = req.body.bookingId;
        let resp = await dbLayer.bookShow(showId, noofSeats)
        if (resp) {
            res.status(200);
            res.json("message" + ":" + "Successfully booked the ticket with bookingId " + bookingId + " " + "The avilable Seats for the show is " + resp)
        }
    } catch (err) { next(err) }

})

module.exports = routing;