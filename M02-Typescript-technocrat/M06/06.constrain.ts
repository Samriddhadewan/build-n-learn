// Constrain : strict rules 

type Student = {
    id:number, name:string
}

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Programming By Samriddha Dewan",
    ...studentInfo,
  };
};
let student3 = {
    id:123,
    name:"Samriddha",
    isMarried: true,
}

const studentThree = addStudentToCourse(student3)