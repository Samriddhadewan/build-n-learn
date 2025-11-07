// VALID PARENTHESES
import Stack from "./Stack.js";

const bracketChecker = (str) => {
  const stack = new Stack();
  const bracketMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "[" || char === "(" || char === "{") {
      stack.push(char);
    } else if (char === "]" || char === ")" || char === "}") {
      if (stack.isEmpty()) {
        return false;
      }

      const expected = bracketMap[char];
      const get = stack.pop();
      console.log("Expected :", expected,"Get :", get);

      if (get !== expected) {
        return false;
      }
    }
  }
  return stack.isEmpty();
};
console.log(bracketChecker("(({}))}"));
