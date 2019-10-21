export default class Cat extends Animal{
  constructor(name, age, canFly = true) {
    super(name, "Bird", age, "barrrrks", true);
    this.canFly = canFly;
​
    console.log("Do Passport?", this.hasPassport);
  }
  makeSound() {
    console.log(`${this.name} ${this.sound}`);
  }
}
​
const bear = new Bird("Bear", 5);
console.log(bear.makeSound());
bear.getOlder();
console.log(bear.makeSound());