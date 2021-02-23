const dbLayer = require("../models/dbLayer")

let service = {}

service.insertScript = async() => {
    let data = await dbLayer.insertScript();
    return data;
}


service.getPackages = async() => {
    let data = await dbLayer.getPackages()
    if (data.length > 0) {
        return data
    } else {
        let err = new Error("No package found")
        err.status = 404
        throw err
    }
}

service.takeDetail = async(detailObj) => {
    let response = dbLayer.takeDetail(detailObj);
    if (response) {
        return response;
    } else {
        let err = new Error("Some error occured")
        err.status = 402
        throw err

    }
}
module.exports = service