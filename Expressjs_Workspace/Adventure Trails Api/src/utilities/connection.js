const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)
const url = 'mongodb://localhost:27017/AdventureTrailsDB'

let schema = {
    "packageName": {
        type: String,
        required: true
    },
    "trekName": {
        type: String,
        required: true
    },
    "customerName": {
        type: String,
        required: true,
        unique: true
    },
    "date": {
        type: Date
    },
    "seats": {
        type: Number
    }
}


let travelPackagesSchema = new Schema(schema, { collection: "travelPackages", timestamps: true })

let connection = {}
connection.getCollection = async() => {
    try {
        return (await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })).model("travelPackages", travelPackagesSchema)
    } catch (err) {
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    }
}

module.exports = connection