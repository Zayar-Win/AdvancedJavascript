//sorry for my wirting skill.I am writing just understand for me.
class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  getFullName() {
    return this.fName + " " + this.lName;
  }
}

class SuperHero extends Person {
  //in javascript we can inheritance another class.Inheritance will give
  //the all properties having in extands class.
  constructor(fName, lName) {
    super(fName, lName); //we can call extend class's constructor method by using super method
    //super method will call extends class constructor
    this.isSuperHero = true;
  }

  fightCrime() {
    return "fighting crime";
  }
}

const person1 = new Person("Zayar", "Win"); //this sentence is the creating of Person instance
//when the Person instance is created the constructor method will first call as new keyword work!!
const superHero1 = new SuperHero("Zayar", "win");

console.log(person1.getFullName());
console.log(superHero1.getFullName());
