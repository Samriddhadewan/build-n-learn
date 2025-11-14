// oop : instance of type guard/type narrowing

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(hourOfSleep: number) {
    console.log(`${this.name} bhai daily ${hourOfSleep} ghonta ghumai`);
  }
}

// Student Instance
class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doClass(hourOfClass: number) {
    console.log(`${this.name} chatrota daily ${hourOfClass} ghonta class kore`);
  }
}

// Teacher instance
class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(hourOfClass: number) {
    console.log(`${this.name} sir daily ${hourOfClass} ghonta class nen`);
  }
}


const isStudent = (user : Person) => {
    return user instanceof Student;
}
const isTeacher = (user : Person) => {
    return user instanceof Teacher;
}

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doClass(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(9);
  }
};

const student1 = new Student("Samriddha");
const teacher1 = new Teacher("Pahel");
const person1 = new Person("Pahel");

getUserInfo(student1);
