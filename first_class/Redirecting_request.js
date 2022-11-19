const http = require('http');
const fs = require('fs'); // fs = file system
const server = http.createServer((req, res) =>
{   
    const url =req.url;
    const method =req.method;


    if (url ==='/')
    {
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input ><button type="submit">send</button> </form></body>');
    
     return res.end();
    }
   
    if (url === '/message' && method === "POST")
    {
        fs.writeFileSync('message.txt','my name is fardin');
        res.statusCode = 302; // redicrecting =302
        res.setHeader('Location', '/');
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