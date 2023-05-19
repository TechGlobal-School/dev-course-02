// Prototypical Inheritence
//  3 ways

// Functions ----

function Cat(name, breed) {
  this.name = name;
  this.breed = breed;
}

Cat.prototype.getDetails = function () {
  console.log(`${this.name} is a ${this.breed}`);
};

const cat1 = new Cat("Leo", "Bengal");
const cat2 = new Cat("Lia", "Russian blue");

console.log(cat1);
console.log(cat2);
cat1.getDetails();
cat2.getDetails();

// Classes -----

class CatClass {
  #privateVar = 10;
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    // delete this.#privateVar; // error
    // this.#privateVar = this.#privateVar;
    // this.#privateVar2 = 12;
  }
  // static method
  static ownerInfo() {
    console.log("Owner");
  }

  #privateMethod() {
    // …
    console.log("private method");
  }

  getDetails() {
    console.log(`${this.name} is a ${this.breed}`);
  }
}

const cat3 = new CatClass("Burma", "Burmese");
console.log("cat3", cat3);
cat3.getDetails();
// cat3.ownerInfo(); // error
CatClass.ownerInfo(); // Owner

// cat3.#privateVar = 11; // error
// console.log(cat3.#privateVar2); // error
// cat3.#privateMethod(); // error
// cat3.privateMethod(); // error

// Getters and Setters example in class
// => https://replit.com/@urakymzhan/getterssetters-1#index.js

// INHERITENCE USING REGULAR CLASS
// extends keyword
// super() from child class

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

// Student
class Student extends Person {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
}

const ulan = new Student("Ulan", 2020, "Computer Science");

console.log(ulan);

// INHERITENCE USING FUNCTIONS

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person2.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student2 = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear); // super() in class
  this.course = course;
};
// Linking prototypes
Student2.prototype = Object.create(Person2.prototype);
Student2.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const ulan2 = new Student2("Ulan", 2020, "Computer Science");

ulan2.introduce();
// ulan2.calcAge();
console.log(ulan2.__proto__);
console.log(ulan2.__proto__.__proto__);
console.log(ulan2 instanceof Student2); // true
console.log(ulan2 instanceof Person2); // true
console.log(ulan2 instanceof Object); // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
