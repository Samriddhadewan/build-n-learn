// Mapped types

// map

const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

const arrayOfString: string[] = ["1", "2", "3", "4", "5"];

const arrayOfStringUsingMap: string[] = arrayOfNumbers.map((number) =>
  number.toString()
);

console.log(arrayOfStringUsingMap);

type AreaOfNum = {
  height: number;
  width: number;
};
// type AreaOfString = {
//     height : string;
//     width : string;
// }

type areaOfString = {
  [key in "height" | "width"]: string;
};

type AreaOfBool = {
  [key in keyof AreaOfNum]: boolean;
};

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: number }> = {
  height: "false",
  width: 36,
};
