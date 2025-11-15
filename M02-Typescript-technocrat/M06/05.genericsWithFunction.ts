// Generic Function
const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithBoolean = (value: boolean) => [value];

const createArrayWithUserObj = (value: { id: number; name: string }) => {
  return [value];
};

// dynamic usage of generics with array
const createGenericArr = <T>(value: T) => {
  return [value];
};

const arrString = createGenericArr("apple");
const arrNum = createGenericArr(222);
const arrObj = createGenericArr({
  name: "Samriddha",
});
// tuple

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => {
  return [param1, param2];
};

const res1 = createArrayTupleWithGeneric(12, "dsd");
const res2 = createArrayTupleWithGeneric(12, { name: "Mezba" });







const addStudentToTheCourse = <T>(studentInfo: T) => {
  return {
    course: "Programming By Samriddha Dewan",
    ...studentInfo,
  };
};

const student1 = {
  name: "Samriddha Dewan",
  id: 20,
  age: 23,
  nationality: "Bangladeshi",
};

const studentOne = addStudentToTheCourse(student1);
console.log(studentOne);
