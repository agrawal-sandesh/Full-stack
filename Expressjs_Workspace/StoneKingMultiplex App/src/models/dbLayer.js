const connection = require("../utilities/connection")
const validator = require("../utilities/validator")

let createConnection = async() => {
    collection = await connection.getCollection();
}

let model = {}
model.insertScript = async(insertedData) => {
    let response = await collection.insertMany(insertedData);
    if (response && response.length > 0) {
        return response.length
    } else {
        let err = new Error("Script insertion failed")
        err.status = 500
        throw new Error
    }
}

model.getShowDetails = async() => {
    let response = await collection.find();
    if (response && response.length > 0) {
        return response
    } else {
        let err = new Error("Script insertion failed")
        err.status = 500
        throw new Error
    }
}

model.checkShowId = async(showId) => {
    validator.validateShowId(showId)
    let response = await collection.find({ showId: showId }, { _id: 0, showId: 1 });
    if (response.length > 0) {
        return (response[0].showId)
    } else {
        let err = new Error("show is not available")
        err.status = 500
        throw new Error
    }
}

model.bookShow = async(showId, noofSeats) => {
    let response = await collection.updateOne({ showId: showId }, { "$inc": { "availableSeats": -noofSeats } })
    if (response) {
        response = await collection.find({ showId: showId }, { _id: 0, availableSeats: 1 });
        if (response.length > 0) {
            return (response[0].availableSeats)
        }

    } else {
        let err = new Error("Movie is not available")
        err.status = 500
        throw new Error
    }
}

createConnection();
module.exports = model