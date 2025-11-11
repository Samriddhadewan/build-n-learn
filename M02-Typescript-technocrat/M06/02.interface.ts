type User = {
  name: string;
  age: number;
};

type Role = {
  role: "Admin" | "User";
};

type UserWithRole = User & Role;

// interface sudhu matro object type data er shate kaj korbe like Array, Object, function
interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "Admin" | "User";
}

const user1: IUserWithRole = {
  name: "Mr. X",
  age: 100,
  role: "Admin",
};

// Function
type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

type Friends = string[];

interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ["A", "B", "C"];
console.log(friends)
