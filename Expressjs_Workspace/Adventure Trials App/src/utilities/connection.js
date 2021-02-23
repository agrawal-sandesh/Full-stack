const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)
const url = 'mongodb://localhost:27017/AdventureTrialsDB'

let schema = {
    "customerName": {
        type: String,
        unique: true
    },
    "packageName": {
        type: String

    },
    "date": {
        type: String
    },
    "seatsRequired": {
        type: Number
    }
}


let adventureTrailsSchema = new Schema(schema, { collection: "AdventureTrails", timestamps: true })

let connection = {}
connection.getCollection = async() => {
    try {
        return (await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })).model("AdventureTrails", adventureTrailsSchema)
    } catch (err) {
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    }
}

module.exports = connection