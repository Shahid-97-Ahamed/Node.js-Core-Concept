// const { error } = require("console");
const fs = require("fs");

console.log("Start reading....");

fs.readFile('./data/dairy.txt','utf-8',(error,data)=>{
    if(error){
        console.error(error.massage);
    }
    else{
        console.log("File Content");

        console.log(data);
    }
})

console.log("This is Ending.....");