const isPalindrome = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const replaced = normalized.split("").reverse().join("");

  if (normalized === replaced) {
    return true;
  }
  return false;
};


const isPalindromeTwoPointer = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = normalized.length - 1;
    
    while (left < right) {

        // this is where the def came from the upper one Time complexity = O(m/2)
        if (normalized[left] !== normalized[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isPalindromeTwoPointer("Madam in Eden, I'm Adam."));