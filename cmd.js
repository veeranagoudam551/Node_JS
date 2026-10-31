const readline = require ('readline');
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("enter your name:",(name)=>{
    r1.question("enter your age:",(age)=>{
        r1.question("enter your city:",(city)=>{
            console.log(`Hello ${name},${age},${city} We welcome you!`)
            r1.close();
        })
    })
})