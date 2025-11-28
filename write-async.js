const { error } = require("console");
const fs = require("fs");

const contentTwo ="This File Number Two \n Now Show Data Asyncronas";

fs.writeFile("./output/write-async.txt",contentTwo,"utf-8",(error)=>{
    if(error){
        console.error(error.message);
    }
    else{
        console.log("Async Content Writing...")
    }
})