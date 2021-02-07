const http = require("http");
const mod = require('./modules.js')
let server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    let result1 = mod.sum(2, 5);
    let result2 = mod.checkPrime(24);
    console.log("Request received")
    response.write("Result for Addition:" + result1 + "<br>");
    response.write("Result for checking Prime Number:" + result2 + "<br>");
    response.end("<html><body>The request URL is: " + request.url + "</body></html>");
});
server.listen(3000);
console.log("Server is running at port 3000");