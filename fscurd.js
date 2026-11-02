const fs = require('fs');

// Create a new file
fs.writeFileSync("html/apple.txt", 'Hello, World!');

// Read the file
const data = fs.readFileSync('html/apple.txt', 'utf8');
console.log(data);

// Append to the file
fs.appendFileSync('html/apple.txt', '\nAppended text.');

// Read the file again
const updatedData = fs.readFileSync('html/apple.txt', 'utf8');
console.log(updatedData);

// Delete the file
fs.unlinkSync('html/apple.txt');