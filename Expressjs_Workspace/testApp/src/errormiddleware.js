const express = require('express');
const app = express();
app.get('/login',(req,res) => {
	res.send("Login Page");
});
app.get('/user',(req,res) => {
	res.send("User Login Success");
});
app.get('*', (req, res, next) => {
  let err = new Error();
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
    res.send("Requested Page is not available! ");
});
app.listen(3000);
console.log("Server Started at port 3000!")
