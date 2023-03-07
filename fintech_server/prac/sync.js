let fs = require("fs");

console.log("first func");
let result = fs.readFileSync("./text.txt", "utf8");
console.log(result);
console.log("third func");