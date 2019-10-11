const http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Node.js runs on IOx!  Now it is " + new Date().toISOString());
});
server.listen(8080);
