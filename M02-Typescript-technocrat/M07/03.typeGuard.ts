// Type guard
type AlphaNumericType = number | string;

const sum = (num1: AlphaNumericType, num2: AlphaNumericType) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

const sum1 = sum(2, 3);
const sum2 = sum("2", 3);

// type guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: string;
};

const checkUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`User name is ${user.name} and user role is ${user.role}`);
  } else {
    console.log(`user name is ${user.name}`);
  }
};
checkUser({ name: "Samriddha Dewan" });
