const fs = require("fs");


console.log("File started reading....")
fs.readFile("./data/diary.txt","utf-8", (error,data)=> {
    if(error){
        console.log("Error happen:", error.message)
    }
    console.log(data)
})
console.log("File reading end....")