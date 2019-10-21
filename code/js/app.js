"use strict";
​
import Animal from "./animal.js";
import * as Helpers from "./helper.js";
import  bird from "./bird.js";
import Person from"./person.js";
​
console.log(Helpers.add(1, 2));
console.log(Helpers.getRandom());
// class Car {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//     this.fuel = 100;
//     console.log("Car Constructors", this.model, this.color);
//   }
​
//   drive() {
//     this.fuel--;
//     return "Vroom!!";
//   }
//   refuel() {
//     this.fuel++;
//   }
// }
​
// const celica = new Car("BMW", "lightpink");
// const civic = new Car("Honda Civic", "Blue");
// console.log(celica.drive());
​
class Person {
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
// console.log(notMyCat.makeSound());
// notMyCat.getOlder();
// console.log(notMyCat.makeSound());
​
class Bird extends Animal {
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