const http = require('http');
const fs = require('fs');
let server = http.createServer((request, response) => {
    if (request.url === "/favicon.ico") {
        console.log("Request for favicon")
    } else {
        fs.appendFile('./log.txt', "\nRequest from: " + request.url + " At: " + new Date().getFullYear(), (err) => {
            if (err)
                throw err;
            console.log('Data saved!');
        });
        response.writeHead(200, { 'Content-Type': "text/html" });
        response.end("<html><body><h1>Successfully logged:  " + request.url + "</h1></body></html>");
    }
})
server.listen(3000);
console.log("Server started.... Running at port 3000");