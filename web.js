const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) =>{
    
    fs.readFile('html/test.html','utf8',(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/plain'})
            res.write("404 not found")
            res.end();
        }else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data);
            res.end();
        }
    })
});
server.listen(5500,()=>{
    console.log("server is running on port 5500")
})