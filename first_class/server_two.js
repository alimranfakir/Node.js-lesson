const http = require('http');
const server = http.createServer((req, res) =>
{   
    const url =req.url;
    if (url ==='/')
    {
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><form action="/m" method="POST"><input type="text" name="message"></input ><button type="submit">send</button> </form></body>');
    
     return res.end();
    }


    console.log(req.url, req.method, req.headers);
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body> <h1> Hei my name is fardin</h1></body>');
    res.end();

});
server.listen(8080);