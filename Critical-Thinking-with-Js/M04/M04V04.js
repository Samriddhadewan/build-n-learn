const TwoSum = (arr, target) => {
    const mapSum = new Map();

    for(let i = 0; i < arr.length; i++){
        const currentNumber = arr[i];
        const compliment = target - currentNumber;

        if(mapSum.has(compliment)){
            return [mapSum.get(compliment), i]
        }
        mapSum.set(currentNumber, i)

    }
    return undefined;
}


const sum = TwoSum([8,7,11,2,0,9,6], 9);
console.log(sum)











































// const twoSum = (arr, target) => {
//     const numMap = new Map();
    
//     for (let i = 0; i < arr.length; i++) {
//         const currentNumber = arr[i]
//         const compliment = target - currentNumber;

//         if(numMap.has(compliment)){
//             return [numMap.get(compliment), i]
//         }
//         numMap.set(currentNumber, i)
//     }

//     return undefined;
// }
// console.log(twoSum([2,7,4,5,11 ], 18))