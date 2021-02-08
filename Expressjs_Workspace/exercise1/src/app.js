const express = require('express');
const app = express();
const fs = require('fs');

app.get('/getAll', (req, res) => {
    fs.readFile('./games.txt', 'utf-8', (err, content) => {
        if (!err) {
            res.send(content);
            res.statusCode = 200;
        } else {
            throw console.error("Error while fetching data");
            res.statusCode = 500;
        }

    })
});

app.get('/params/:year', (req, res, next) => {
        console.log(req.params.year);
        next();
    },
    (req, res) => {
        res.send("Filter by year " + req.params.year + " was applied");
    }
)

app.get('/query', (req, res, next) => {
        console.log(req.query.name);
        next();
    },
    (req, res) => {
        res.send("Filter by name " + req.query.name + " was applied");
    }
)

app.listen(3000);
console.log("Server listning to port 3000!");