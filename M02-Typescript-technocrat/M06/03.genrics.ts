// dynamically generalize

type ArrayOfGenerics<T> = Array<T>;

type GenericsArray<T> = Array<T>;

// const  myFriends: string[] = ["pujan", "joyatu", "kalbin"];
const myFriends: ArrayOfGenerics<string> = ["pujan", "joyatu", "kalbin"];

// const rollNumbers : number[] = [23,43,54,65,76,21];
const rollNumbers: ArrayOfGenerics<number> = [23, 43, 54, 65, 76, 21];

// const isEligibleList : boolean[] = [true, false, true ]
const isEligibleList: ArrayOfGenerics<boolean> = [true, false, true];








// Generics with tuples
type GenericsWithTuples<X, Y> = [X, Y];

const coordinates1: GenericsWithTuples<number, number> = [20, 40];

const coordinates2: GenericsWithTuples<string, string> = ["20", "40"];






type User = {
  name: string;
  age: number;
};

// Generics With Object/ type alias
const userList: GenericsArray<User> = [
  {
    name: "samriddha",
    age: 23,
  },
  {
    name: "pujan",
    age: 20,
  },
];
