const fs = require('fs');

const operations = process.argv[2];
if(operations == 'write'){
    const name = process.argv[3];
    const content =process.argv[4];
    const fullname = "html/"+name+".txt";
    fs.writeFileSync(fullname, content);   //fs.writeFileSync(filePath, data);
}else if (operations == 'read'){
    const name = process.argv[3];
    const fullname = 'html/'+name+'.txt';
    const data = fs.readFileSync(fullname, 'utf-8');
    console.log(data);
}else if(operations == 'append'){
    const name = process.argv[3];
    const content = process.argv[4];
    const fullname = 'html/'+name+'.txt'
    fs.appendFileSync(fullname, content);
}else if(operations == 'delete'){
    const name = process.argv[3];
    const fullname = 'html/'+name+'.txt'
    fs.unlinkSync(fullname);
}else{
    console.log("Invalid operation. Please use 'write', 'read', 'append', or 'delete'.");
}