const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    fs.readFile('html/form.html','utf-8',(err,data)=>{
        if(err){
            res.writeHead(500,{'Content-type':'text/plain'})
            res.write("Internal server error")
            return;
        }
        res.writeHead(200,{'Content-type':'text/html'})
        if(req.url === '/'){ 
            res.write(data)
        }else if(req.url === '/submit'){
            res.write("<h1>Form submitted successfully</h1>")
        }
        res.end();
    })
});
server.listen(3300,()=>{
    console.log("server is running on port 3300")
})