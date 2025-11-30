const os =require("os");

console.log("system info \n");
console.log("-".repeat(59));

console.log("Plateform details:");
console.log("Platform:",os.platform());
console.log("Architecture:",os.arch());
console.log("OS type:",os.type());
console.log("OS Release:",os.release());
console.log("Hostname",os.hostname());

console.log("-".repeat(59));


console.log("\nCPU info : ");
const cpus =os.cpus();
console.log("CPU Model : ",cpus[0].model);
console.log("Number os cores:",cpus.length);
console.log("CPU speed :",cpus[0].speed);

console.log("-".repeat(59));

const totalMam =os.totalmem();
const freeMam =os.freemem();
console.log("total Memory :",(totalMam/1024/1024/1024).toFixed(2))
console.log("Free Memory :",(freeMam/1024/1024/1024).toFixed(2),"GB");

console.log("-".repeat(59));

const upTime =os.uptime();
const days =Math.floor(upTime/86400);
const hours =Math.floor((upTime%86400)/3600);
const minutes =Math.floor((upTime%3600)/60);
console.log(`${upTime}`)
console.log("-".repeat(59));
console.log(`${days} days ${hours} hours ${minutes} minutes`);



