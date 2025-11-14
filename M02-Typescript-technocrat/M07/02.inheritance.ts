class Person {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getSleep() {
    console.log(`Eni eto Ghonta ghumai`);
  }
}

// student class constructor
class Student extends Person {
  classKore(hourOfClass: number) {
    console.log(
      `${this.name} ${hourOfClass} ghonta class kore ${this.address} theke`
    );
  }
}

// teacher class constructor
class Teacher extends Person {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  classKoran(hourOfClass: number) {
    console.log(
      `${this.name} (${this.designation}) ${hourOfClass} ghonta class koran`
    );
  }
}

const student1 = new Student("Samriddha", 23, "Rangamati");
const student2 = new Student("sowradeep", 24, "dhaka");
const teacher1 = new Teacher(
  "pahel sir",
  30,
  "travel Adam",
  "senior english teacher"
);
teacher1.classKoran(15);
