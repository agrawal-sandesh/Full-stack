const express = require('express');
const create = require("./model/dbsetup")
const tester = require("../parserModule/parser").reportGenerator
const cors = require('cors');
const bodyParser = require('body-parser');
const requestLogger = require("./utilities/requestlogger");
const errorLogger = require("./utilities/errorlogger");
const router = require('./routes/routing')
const app = express();

// Import necessary modules and configure the middleware in proper order
// Note :  Do not remove any code which is already given 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/', router);
app.use(errorLogger);

if (!module.parent) {
    app.listen(1050);
}
console.log("Server listening in port 1050");


module.exports = app;