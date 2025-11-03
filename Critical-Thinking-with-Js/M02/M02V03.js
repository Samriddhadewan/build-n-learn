const numbers = [1, 53, 23, 100, 200, 38, 18, 7];
const fruits = ["Banana", "cheery", "apple", "Date"];
const nestedArr = [12, 43, [22],[32,[343,43],34, 43],43]
const keywords = [
    ["react", "nextjs", "tailwind"],
    ["nodejs", "nextjs", "mongodb", "expressjs"],
    ["daisyui", "html","css", "tailwind", "vercel", "mongoose"],

]


const sortedNumbers = numbers.sort((a, b) => a - b);
const sortedFruits = fruits.sort((a, b)=> a.localeCompare(b))

const flatArr =nestedArr.flat(Infinity)

const filteredKeywords = [...new Set(keywords.flat())];
console.log(filteredKeywords)

