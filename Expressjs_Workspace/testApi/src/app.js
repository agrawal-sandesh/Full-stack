const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/routing');
const app=express();
const myrequestLogger=require('./utilities/requestLogger');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(myrequestLogger);
app.use('/',router);
app.listen(3000);
console.log("Server started at port 3000!");
