// Selection sort 
const selectSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    return arr;
  }
};

const select = selectSort([3, 2, 5, 7, 6, 10]);
console.log(select);

// const selectSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < array.length; j++) {
//         if(array[j] < array[minIndex] ){
//             minIndex = j;
//         }
//     }
//     if(minIndex !== i){
//         let temp = array[i];
//         array[i] = array[minIndex];
//         array[minIndex] = temp
//     }
// }   return array;
// };
