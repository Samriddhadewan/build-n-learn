const numbers = [2, 4, 6, 8, 10];

const currentUser = ["editor", "admin"];
const requiredUser = ["manager", "admin"];

const hasOdd = numbers.some((number) => number % 2 !== 0);

const canAccess = currentUser.some((user) => requiredUser.includes(user));
// console.log(canAccess)
// console.log(hasOdd)

const arr = Array.from({ length: 5 }, (value, idx) => idx);
// console.log(arr)

const arr2 = Array.from([1,2,3], (value,idx)=>  value + idx )
console.log(arr2)






























// // range function in js
// const range = (start, end, step) =>
//   Array.from(
//     { length: Math.ceil((end - start) / step) },
//     (value, idx) => start + idx * step
//   );

// console.log(range(1, 11, 2));
