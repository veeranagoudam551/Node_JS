const http = require('http');
const fs = require('fs');
const qureystring = require('querystring');

const server = http.createServer((req,res)=>{
    fs.readFile('html/form.html','utf-8',(err,data)=>{
        if(err){
            res.writeHead(500,{'content-type':'text/plain'})
            res.write("internal server error")
            res.end();
        }
       
        if (req.url == '/'){
             res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
        }else if(req.url === '/submit'){
            res.write("<h1>Form submitted successfully</h1>")
            const databody = [];
            req.on('data',(chunk)=>{
                databody.push(chunk)
            })
            req.on('end',()=>{
                const rawdata = Buffer.concat(databody).toString();
                console.log(rawdata);
                const readabledata = qureystring.parse(rawdata);
                console.log(readabledata);
                let datastring ="Name: " + readabledata.name + " Email id is: " + readabledata.email;
                console.log(datastring);


                // fs.writeFileSync("text/"+readabledata.name+".txt",datastring);
                // console.log("File created successfully");
                fs.writeFile("text/"+readabledata.name+".txt",datastring,'utf-8',(err)=>{
                    if(err){
                        res.end("Error writing file:");
                    } else {
                        res.end("File created successfully");
                    }
                });
            })
        
        }
        res.end()
    })
 
});
server.listen(4800,()=>{
    console.log("server is running on port 4800")
})



// Synchronous (Sync) means: Execute one task at a time. Wait until the current task finishes before moving to the next task.

// Asynchronous (Async) means: Start a task and don't block the program while waiting for it to finish. Other work can continue.