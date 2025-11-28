const path = require("path");

console.log("current file info: \n");
console.log("file info:", __filename);
console.log("directory info:", __dirname);

console.log("\n "+ "-".repeat(50)+ "\n")

const filePath = "/samriddha/documents/fullstack.pdf"

console.log("analyzing path:", filePath,"\n")
console.log("directory name :", path.dirname(filePath))
console.log("Base name :", path.basename(filePath))
console.log("Extension name :", path.extname(filePath))
console.log("File name :", path.basename(filePath, path.extname(filePath)))

console.log("\n "+ "-".repeat(50)+ "\n")

const parsed = path.parse(filePath);

console.log("parse file object:", parsed)

console.log("\n "+ "-".repeat(50)+ "\n")
const formatted = path.format(parsed)
console.log("formatted path :", formatted)