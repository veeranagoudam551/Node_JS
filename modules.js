const fs = require('fs');

// Create a file
fs.writeFileSync("gouda.txt", "My name is Gouda");

// Import OS module
const os = require('os');

// OS information
console.log(os.userInfo());
console.log(os.type());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.cpus());


const path = require('path');

const result = path.join('student', 'details', 'data.txt');

console.log(result);