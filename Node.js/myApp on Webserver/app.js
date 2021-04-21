const http = require('http');
const fs = require('fs');
let server = http.createServer((request, response) => {
    fs.readFile('./docs/display.txt', 'utf8', (err, content) => {
        if (!err) {
            response.writeHead(200, { 'Content-Type': "text/html" });
            response.end("<html><body><h1>" + content + "</h1></body></html>");
        } else {
            throw err;
        }
    })
});
server.listen(2080);
console.log("Server started.... Running at port 2080");