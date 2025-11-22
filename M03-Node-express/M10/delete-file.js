const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is a temp file");
console.log("file created");

if (fs.existsSync("./output/temp.txt")) {
  console.log("file exist");

  fs.unlinkSync("./output/temp.txt");
  console.log("file deleted");
}

try {
  fs.unlinkSync("./output/temp.txt");
} catch (error) {
  console.log("ERR:", error.message);
}




fs.writeFile("./output/temp2.txt", "This is another temp file", (error) => {
  if (error) return console.error(error.message);
  console.log("file created asynchronously");

  fs.unlink("./output/temp2.txt", (error) => {
    if(error){
        console.log("Err", error.message);
    }
    console.log("file deleted asynchronously")
  });
});
