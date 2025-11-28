const { cp } = require("fs");
const os = require("os");
console.log("System Info \n")
console.log("-".repeat(50))

console.log("Platform details :")
console.log("Platform : ", os.platform())
console.log("Architecture : ", os.arch())
console.log("OS type : ", os.type())
console.log("OS release : ", os.release())
console.log("OS Hostname : ", os.hostname())

console.log("\n Cpu info :")
const cpus = os.cpus();
console.log("Cpu model", cpus[0].model)
console.log("number of cores", cpus.length)
console.log("cpu speed", cpus[0].speed)

const totalMemory = os.totalmem();
const freemem = os.freemem()
console.log("Total Memory",(totalMemory/1024/1024/1024).toFixed(2))
console.log("Free Memory",(freemem/1024/1024/1024).toFixed(2))

const uptime = os.uptime();
const days = Math.floor(uptime/86400);
const hours = Math.floor((uptime % 86400)/3600);
const min = Math.floor((uptime % 3600)/60);
console.log(`${days} days, ${hours} hours, ${min} minutes`)