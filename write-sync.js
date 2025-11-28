const fs = require("fs");

const contentOne = "Today we learning Node.js \nWow its so Beautyful!!!";

try {
    fs.writeFileSync("./output/write-file.txt", contentOne, "utf-8");
    console.log("Content Writing....");
} 
catch (error) {
    console.error(error.message);
}
