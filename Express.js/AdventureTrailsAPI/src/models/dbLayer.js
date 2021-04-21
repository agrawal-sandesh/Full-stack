const initialData = require("./data.json")
const connection = require("../utilities/connection")

let createConnection = async() => {
    collection = await connection.getCollection();
}

let model = {}

model.insertScript = async() => {
    await collection.deleteMany();
    let response = await collection.insertMany(initialData);
    if (response && response.length > 0) {
        return response.length
    } else {
        let err = new Error("Script insertion failed")
        err.status = 500
        throw new Error
    }
}

model.getPackages = async() => {
    let data = await collection.find();
    return data;
}

model.submitDetails = async(detailObj) => {
    let response = await collection.insertMany(detailObj);
    if (response && response.length > 0) {
        return (response[0].customerName)
    } else {
        let err = new Error("Script insertion failed")
        err.status = 500
        throw new Error
    }
}

createConnection();
module.exports = model