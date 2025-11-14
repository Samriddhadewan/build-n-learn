class Counter { 
  static count: number = 0;

  static increment() {
    return (Counter.count += 1);
  }
  static decrement() {
    return (Counter.count -= 1);
  }
}

const instance1 = new Counter();
const instance2 = new Counter();

// console.log(instance1.increment()) //1
// console.log(instance1.increment()) //2
// console.log(instance1.increment()) //3

// console.log(instance2.increment()) //1
// console.log(instance2.increment()) //2
// console.log(instance2.increment()) //3
// console.log(instance2.increment()) //4

console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.decrement())
console.log(Counter.decrement())