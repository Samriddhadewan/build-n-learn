// arrow function
// normal function

function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

const sum = addNormal(12, 12);
console.log(sum);

const addArrow = (num1: number, num2: number): number => num1 + num2;
const sum2 = addArrow(12, 12);
console.log(sum2);

//object => function => method

const poorUser = {
  name: "samriddha",
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};
poorUser.addBalance(12);

const arr : number[] = [1,2,3]

const sqrArray : number[] = arr.map((num : number) : number => num * num)
console.log(sqrArray)