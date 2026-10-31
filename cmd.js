const readline = require ('readline');
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("enter your name:",(name)=>{
    console.log(`Hello ${name}, We welcome you!`)
    r1.close();
})