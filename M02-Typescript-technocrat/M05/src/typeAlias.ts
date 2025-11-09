type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  address: {
    division: string;
    city: string;
  };
  contact: string;
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Samriddha",
    lastName: " Dewan",
  },
  gender: "male",
  address: {
    division: "chattogram",
    city: "Ranagamati",
  },
  contact: "018432984728",
};
const user2: User = {
  id: 123,
  name: {
    firstName: "Liton",
    lastName: "Chakma",
  },
  gender: "female",
  address: {
    division: "dhaka",
    city: "dhaka",
  },
  contact: "0184384728",
};

type AddFunc = (num1: number, num2: number) => number

const add : AddFunc = (num1, num2)=> num1 + num2;
