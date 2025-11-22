const fs = require("fs")

const contentOne = "This is content1 \n writing this file using in synchronous way"
const contentTwo = "This is content2 \n writing this file using in asynchronous way"

try {
    fs.writeFileSync("./output/file-sync.txt", contentOne);
    console.log("file written synchronously!")
} catch (error) {
    console.log(error.message)
}

fs.writeFile("./output/file-async.txt", contentTwo, (error)=> {
    if(error){
        console.log(error.message)
    }
    console.log("written file asynchronously")
})

