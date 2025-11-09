// ? ternary operator
// ?? : nullish coalescing operator null / undefined
// ?. optional chaining

const biyerJonnoEligible = (age: number) => {
  // if( age >= 21){
  //     console.log(`You are eligible.`)
  // }else{
  //     console.log(`You are not eligible`)
  // }

  const result = age >= 21 ? `You are eligible.` : `You are Not eligible.`;

  return result;
};

// biyerJonnoEligible(20)

const userTheme = "Hello bhai, Huya keya";

const selectedTheme = userTheme ?? "Light";

console.log(selectedTheme);

const isAuthenticated = undefined;
const resultWithTernary = isAuthenticated ? isAuthenticated : "Your are guest!";

const resultWithNullish = isAuthenticated ?? "Your are guest!";

// console.log({ resultWithTernary, resultWithNullish });

// optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Chittagong Hill Tracks",
    town: "Rangamati",
  },
};

const postalCode = user?.address?.postalCode
console.log(postalCode)
