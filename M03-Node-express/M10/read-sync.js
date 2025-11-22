const fs = require("fs");

console.log("Start Reading...");

try {
  const data = fs.readFileSync("./data/diary.txt", "utf-8");
  console.log("File data", data);
} catch (error) {
  console.log(error.message);
}

console.log("File read complete");
