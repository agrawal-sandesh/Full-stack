const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3002);
console.log("Server listening in port 3002");
