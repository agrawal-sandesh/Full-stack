const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routing');
const errorLogger = require('./utilities/errorlogger');
const requestLogger = require('./utilities/requestlogger');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/', router);
app.use(errorLogger);


app.listen(4000);
console.log("Server listening in port 4000");


module.exports = app;