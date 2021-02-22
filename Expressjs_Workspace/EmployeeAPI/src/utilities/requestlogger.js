/*
    Import required module,
    create a request logger which should log all the incoming request in RequestLogger.txt
    It should log time ,type and url of all request
    Export request logger as module
*/

const fs = require('fs');

let requestLogger = function (req, res, next) {
    let logMessage = "" + new Date() + " " + req.method + " " + req.url + "\n"; 
    fs.appendFile('RequestLogger.txt', logMessage , function (err) {
        if (err) return next(err);
    });
    next();

}
module.exports = requestLogger;