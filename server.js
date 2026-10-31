const http = require('http');
http.createServer((req,res)=>
{ 
    res.write("This is my first node js server")
    res.end("Hello world")
}).listen(4000)