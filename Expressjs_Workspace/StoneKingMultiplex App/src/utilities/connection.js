const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)
const url = 'mongodb://localhost:27017/StoneKingMultiplexDB'

const schema = {
    "showId": {
        required: true,
        type: Number
    },
    "showDateTime": {
        required: true,
        type: Date,
        validate: [(showDateTime) => new Date(showDateTime) >= new Date(), 'Date should be greater than today']
    },
    "movieId": {
        required: true,
        type: Number
    },
    "fare": {
        required: true,
        type: Number
    },
    "availableSeats": {
        required: true,
        type: Number
    }
}

let multiplexSchema = new Schema(schema, { collection: "stoneKingMultiplex", timestamps: true })

let connection = {}
connection.getCollection = async() => {
    try {
        return (await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })).model("stoneKingMultiplex", multiplexSchema)
    } catch (err) {
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    }
}

module.exports = connection