var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' })

    if (request.url == "/") {
        let data = fs.readFileSync('home.html', 'utf-8');
        response.end(data);

    } else if (request.url == "/about") {
        let data = fs.readFileSync('about.html', 'utf-8');
        response.end(data);

    } else if (request.url == "/contact") {
        let data = fs.readFileSync('contact.html', 'utf-8');
        response.end(data);

    }
});
server.listen(5000);
console.log('Server Running...');