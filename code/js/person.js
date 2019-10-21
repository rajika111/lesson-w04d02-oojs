export default class Cat extends Animal{
  constructor(name) {
    this.name = name;
    this.species = "Homo Erectus";
  }
  speak() {
    return `Hello! I'm ${this.name}, I'm a ${this.species}; I'm Simple upright man!`;
  }
}
​
const muhannad = new Person("Muhannad");
// console.log(muhannad.speak());
​
const abdulrahman = new Person("abdulrahman");
// console.log(abdulrahman.speak());
​
const notMyCat = new Animal("Joe", "Cat", 2, "Meow");
const myCat = new Animal("Joeseph", "Caterpillar", 100, "phishhhhh", true);