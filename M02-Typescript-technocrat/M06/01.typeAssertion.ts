let anything: any;

anything = "samriddha";

(anything as string).toLocaleLowerCase();

const kgToGmConverter = (
  input: number | string
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    console.log(value);
    return `Converted Output is :${Number(value) * 1000}`;
  }
};

const result1 = kgToGmConverter(2) as number;
const result2 = kgToGmConverter("2 kg") as string;

type CustomError = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomError).message);
}
