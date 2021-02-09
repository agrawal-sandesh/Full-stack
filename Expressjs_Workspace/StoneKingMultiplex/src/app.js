const express = require('express');
const app =express();
const bodyParser = require("body-parser");
const router=require('./routing');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',router);

app.listen(3000);
console.log("Server stared at port 3000!")