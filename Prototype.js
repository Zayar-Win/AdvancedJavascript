function Person(fName, lName) {
  //this = {}
  this.fName = fName;
  this.lName = lName;
}

// a function which call by new keyword that is call constructor method and it will create in calling
//funciton a new empty object

const person1 = new Person("Zayar", "Win");
const person2 = new Person("Nay", "bala");

Person.prototype.getFullName = function () {
  return this.fName + " " + this.lName;
};

function SuperHero(fName, lName) {
  Person.call(this, fName, lName); //this is prototype inheritance && call method can specifice the object and it will change this keyword
  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
  return "fighting Crime";
};

SuperHero.prototype = Object.create(
  //object.prototype will return left side object
  Person.prototype //this is prototype inheritance
);

const superHero1 = new SuperHero("Zayar", "win");
SuperHero.prototype.constructor = SuperHero;

console.log(superHero1.getFullName());
// console.log(person1.getFullName());
// console.log(person2.getFullName());
