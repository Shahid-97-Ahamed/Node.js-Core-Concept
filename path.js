const path = require("path");

console.log("file updateing...\n");

console.log("filename...",__filename);
console.log("Directory:",__dirname);

console.log("\n"+"-".repeat(57)+"\n");

const filePath = "/shahid/documents/data.pdf";

console.log("Analyzing path",filePath,"\n");

/*
1.Directory name
2.Base Name
3.file Extention
4.file name
*/

console.log("Directory name",path.dirname(filePath));
console.log("Base-Name:",path.basename(filePath));
console.log("file-extantion",path.extname(filePath));
console.log("file-name:",path.basename(filePath,path.extname(filePath)));

console.log("\n"+"-".repeat(57)+"\n");

const persed =path.parse(filePath);
console.log(persed);

console.log("\n"+"-".repeat(57)+"\n");

// for formatting....

console.log("formating",path.format(persed));
