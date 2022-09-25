const http = require('http');
const server = http.createServer((req, res) =>
{
    console.log(req.url, req.method, req.headers);
    res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><title>my first page</title></head>');
    res.write('<body> <h1> Hei my name is fardin</h1></body>');
    res.end();

});
server.listen(8080);