class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`The animal ${this.name} is making sound ${this.sound}`);
  }
}

const dog = new Animal("dogesh bhai", "dog", "ghew ghew");
const cat = new Animal("billi bhai", "cat", "meo meo");
console.log(dog.makeSound());
console.log(dog.name);
