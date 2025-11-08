const BinarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  console.log("Initial Low:", low, "High:", high);

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const guess = arr[mid];

    console.log("\n--- Step ---");
    console.log("Low:", low, "High:", high);
    console.log("Mid Index:", mid, "Mid Value:", guess);

    if (guess === target) {
      console.log("Found target at index:", mid);
      return mid;
    } else if (guess > target) {
      console.log(`${guess} is greater than ${target}, moving HIGH to mid - 1`);
      high = mid - 1;
    } else {
      console.log(`${guess} is less than ${target}, moving LOW to mid + 1`);
      low = mid + 1;
    }
  }

  console.log("Target not found");
  return -1;
};

console.log(BinarySearch([3, 4, 5, 6, 7, 9, 11, 22, 23, 47, 74, 182, 473], 22));
