const path = require('path');

const file = "text/peter.txt";

console.log("Extension:", path.extname(file));

console.log("Directory:", path.dirname(file));

console.log("File name:", path.basename(file));

console.log("Absolute path:", path.resolve("text", "peter.txt"));

console.log("Is absolute:", path.isAbsolute(file));

console.log("Current directory:", __dirname);

console.log("Current file:", __filename);