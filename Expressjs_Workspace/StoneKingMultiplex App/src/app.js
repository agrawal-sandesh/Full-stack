const express = require('express');
const app =express();
const cors=require('cors');
const bodyParser = require("body-parser");
const router=require('./routes/routing');
const myrequestLogger=require('./utilities/requestLogger');
const myerrorLogger=require('./utilities/errorLogger');
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //Line 1
mongoose.connect('mongodb://localhost:27017/MultiplexDB', { useNewUrlParser: true }) //Line2

<<<<<<< Updated upstream
=======
>>>>>>> 55cd427f2e226a63544073201408cafe854b09d0
>>>>>>> Stashed changes

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(myrequestLogger);
app.use('/',router);
app.use(myerrorLogger);

app.listen(3000);
console.log("Server stared at port 3000!")