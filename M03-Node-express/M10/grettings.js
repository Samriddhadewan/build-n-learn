const args = process.argv;

// process.arg[0] = node path
// process.arg[1] = file path
// process.arg[2] = first actual argument

const name = args[2] || "guest";
const time = new Date().getHours();

let greetings;
console.log("Hour",time)
console.log("Full Time",new Date())

if (time < 12) {
  greetings = "Good Morning";
} else if (time < 18) {
  greetings = "Good Afternoon";
} else {
  greetings = " Good evening";
}

console.log(`${greetings}  ${name}`)