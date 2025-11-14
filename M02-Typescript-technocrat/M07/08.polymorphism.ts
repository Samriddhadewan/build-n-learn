// Polymorphism

class Person {
  getSleep() {
    console.log(`Iam a normal happy person.I sleep for 8 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a student and I Sleep for 7 hours`);
  }
}

class NextLevelDeveloper extends Person {
  getSleep() {
    console.log(`I am a next level developer .I sleep for 6 hours a day`);
  }
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

const getSleepHour = (user: Person) => {
  console.log(user.getSleep());
};

// another example of polymorphism
class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const circle = new Circle(10);
console.log(circle.getArea());
const rectangle = new Rectangle(10, 29);
console.log(rectangle.getArea());
