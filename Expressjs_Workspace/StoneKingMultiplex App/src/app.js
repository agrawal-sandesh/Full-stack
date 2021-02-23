const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const router = require('./routes/routing');
const myrequestLogger = require('./utilities/requestLogger');
const myerrorLogger = require('./utilities/errorLogger');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(myrequestLogger);
app.use('/', router);
app.use(myerrorLogger);

app.listen(5500);
console.log("Server stared at port 5500!")