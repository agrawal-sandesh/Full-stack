const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.json({ "message": "Hello World from GET!" });
})
app.get('/about', (req, res) => {
    res.json({ "message": "Hello World from about!" });
})
app.post('/post', (req, res) => {
    res.json({ "message": "Hello World from POST!" });
})
app.put('/', (req, res) => {
    res.json({ "message": "Hello World from PUT!" });
})
app.delete('/', (req, res) => {
    res.json({ "message": "Hello World from DELETE!" });
})
console.log("Server Started at port 3000!");
app.listen(3000);