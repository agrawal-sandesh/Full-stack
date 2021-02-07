const express = require('express');
const app = express();
const path = require('path');
app.get('/', (req, res) => {
    console.log("request for index.html file");
    res.sendFile(path.join(__dirname + '/views/index.html'));
})
app.get('/saveUser', (req, res) => {
    res.json({ username: req.query.username, password: req.query.password });
});
app.get('/home', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send('Welcome');
});
app.get('/register', (req, res) => {
    console.log('request for register.html file');
    res.sendFile(path.join(__dirname + '/views/register.html'));
});
app.get('/about', (req, res) => {
    console.log('Request for about us page');
    res.send('About Us page');
});
console.log('Server Started at port 3000!');
app.listen(3000);