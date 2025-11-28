const fs = require("fs");

// fs.writeFileSync("./output/app.log","Application is Started....\n");  /*this line created a app.log file*/
console.log("Created file...");

const entry1 = `\n${new Date().toISOString()} Applation logged in....\n`;
fs.appendFileSync("./output/app.log",entry1);

const entry2 =`${new Date().toISOString()} Data fatched...`;
fs.appendFileSync("./output/app.log",entry2);

console.log("Task Compleate....")