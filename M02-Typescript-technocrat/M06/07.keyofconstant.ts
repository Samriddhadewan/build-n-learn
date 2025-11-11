// Key of : Type operator

type RichPeopleVehicle = {
  car: string; //key : value
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;
const myVehicle: MyVehicle2 = "car";

type User = {
  name: string;
  id: number;
  age: number;
  
};

type Product = {
    brand : string;
    price : number
}

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const userOne : User = {
  name: "Samriddha",
  id: 32,
  age: 23,
};

const Laptop : Product = {
    brand : "Hp",
    price: 23000
}

const user6 = getPropertyFromObj(userOne, "name");
const product = getPropertyFromObj(Laptop, "price");
console.log({user6, product});
