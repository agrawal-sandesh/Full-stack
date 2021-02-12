const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const myErrorLogger=require('./utilities/errorLogger');
const myRequestLogger=require('./utilities/requestLogger');
const router=require('./routes/router');
const app=express();

app.use(cors());
app.use(bodyParser.json()); 
app.use(myRequestLogger);
app.use('/',router);
app.use(myErrorLogger);

app.listen(3000);
console.log("Server started on port 3000!");
