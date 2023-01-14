const fs = require("fs");
// This is how u import library in the js 



let text = fs.readFileSync("sample.txt","utf-8");

text = text.replace("sample","example");
console.log(text);



console.log("Creating a new file...");
fs.writeFileSync("Lakshay.txt",text);
// This will create a new file with name lakshay.txt, Usme text hoga
