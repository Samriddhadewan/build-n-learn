// let count = 0;

// const counter = (amount) => {
//   count = count + 2;
//   return count;
// };

// console.log(counter(2))
// console.log(counter(2))
// console.log(counter(2))

// closure ex-1
const createCounter = () => {
  let count = 0;

  return (amount) => {
    count = count + amount;
    return count;
  };
};

const counterFn = createCounter();
const counterFn2 = createCounter();
// console.log(counterFn(2))
// console.log(counterFn2(2))

// With closure 
const createBankAccount = () => {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`deposited ${amount}`);
    },
    withdraw(amount) {
      if (amount < balance) {
        balance -= amount;
        console.log(`withdrawl ${amount}, balance: ${balance}`);
      } else {
        console.log(`insufficient Funds`);
      }
    },

    getBalance() {
      console.log(`Balance : ${balance}`);
    },
  };
};

const account = createBankAccount();
// account.deposit(200)
// account.withdraw(30)
// account.getBalance()

// with Class ex-1

class Counter {
  constructor(count) {
    this.num = count;
  }

  add(amount) {
    this.num += amount;
  }

  print() {
    console.log(this.num);
  }
}

const counter1 = new Counter(20);

// with class
class createBankAccount2 {
  constructor(amount = 0) {
    this.balance = amount;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`deposited ${amount}`);
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`withdrawl :${amount}, Balance : ${this.balance}`);
    } else {
      console.log(`insufficient balance`);
    }
  }
  getBalance() {
    console.log(this.balance);
  }
}

const account1 = new createBankAccount2();
// account1.deposit(200)
// account1.withdraw(50)
