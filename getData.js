const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
    fs.readFile('html/form.html','UTF-8',(err,data)=>{
        if (err){
            res.writeHead(500,{"Content-type":"text/plain"})
            res.write("Internal server error")
            res.end();
            return;
        }
        res.writeHead(200,{"Content-type":"text/html"})
        if(req.url === '/'){
            res.write(data)
        }else if (req.url === '/submit'){
            let databody = [];
            req.on('data',(chunk)=>{
                databody.push(chunk)
            });
            req.on('end',()=>{
                let rawdata = Buffer.concat(databody).toString();
                let readableData = querystring.parse(rawdata);
                console.log(readableData);

            })
        
            res.write("<h1>Form submitted successfully</h1>")
        }
        res.end();
    })
    
})
server.listen(4400,()=>{
    console.log("server is running on port 4400")
})