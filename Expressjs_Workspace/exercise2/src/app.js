const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const routing=require('./router')
app.use(bodyParser.json());
app.use('/',routing);

app.listen(3000);
console.log("Server communicating on port 3000!");