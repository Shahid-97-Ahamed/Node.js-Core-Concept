const { error } = require("console");
const fs = require("fs");

fs.writeFileSync("./output/delt.txt","Born for death");
console.log("file created...");

// if("./output/delt.txt"){
//     console.log("File exixted....");

//     fs.unlinkSync("./output/delt.txt");

//     console.log("Delate Complete.....")
// }

/*same way but diffrent way try....*/

try{
    fs.unlinkSync("./output/delt.txt")
}
catch(err){
    console.log("ERROR:",err.message)
}


/*async*/

fs.writeFile("./output/delt2.txt","Second Chance but this time also die",(err)=>{
    
    console.log("Another file exits.....")

    fs.unlink("./output/delt2.txt",(error)=>{
    if(error){
        console.log(error.message);
    }
    else{
        console.log("Second time delate complete.....")
    }
})

})

