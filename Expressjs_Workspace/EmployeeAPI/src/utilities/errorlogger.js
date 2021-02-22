/*
    Import required modules
    It should log time and error stack of all error and should send error message as response
    It should set the error status as response status
    else the default response status should be 500
    export errorLogger as module
 */
const fs = require('fs');

let errorLogger = (err, req, res, next) => {
    if(err){
        next();
    }
}

module.exports = errorLogger;