const fs = require("fs");

fs.writeFileSync("./output/app.log", "Application Started \n");
console.log("File created")

const entry1 = `${new Date().toISOString()} user logged in \n`;
fs.appendFileSync("./output/app.log", entry1);

console.log("Entry One created")

const entry2 = `${new Date().toISOString()} data fetched \n`;
fs.appendFileSync("./output/app.log", entry2);
console.log("Data fetched")