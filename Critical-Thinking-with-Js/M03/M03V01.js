const counter = (amount) => {
  let count = 0;

  count = count + amount;

  return count;
};

const counterObj = {
  count: 0,

  add(amount) {
    this.count = this.count + amount;
  },

  print() {
    console.log(this.count);
  },
};

counterObj.add(3)
counterObj.add(5)

counterObj.print()
