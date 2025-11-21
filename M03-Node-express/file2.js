const { a: x } = require("./file1");
const { a } = require("./file3");

const {sum, division} = require("./utiles")

console.log(sum(a,x))
console.log(division(a,x))