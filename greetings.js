const args = process.argv;

// process.arg[0] =node path;
// process/arg[1] =file path;
// process.arg[2]=first actual argument;

const name = args[2] || "guest";
const time = new Date().getHours();


let greetings;

if(time < 12){
    greetings = "Good Morning";
}
else if(time < 18){
    greetings = "Good AfterNoon";
}
else{
    greetings = "Good Night...!!!"
}

console.log(`${greetings} ${name}`);