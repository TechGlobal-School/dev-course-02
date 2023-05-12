// "use strict";
/* ------ THIS ----- */
//  “this” keyword allows you to decide which object should be focal when invoking a function or a method

const person = {
  fName: "John",
  printPersonName: function () {
    console.log(this.fName);
  },
};

function printName() {
  console.log(this); // window global object
  console.log(this.fName); // undefined
  console.log(person.fName); // John
}

printName();
person.printPersonName(); // Jhon

/* ------ CALL ----- */
// accepts normal and array arguments

const honda = {
  brand: "honda",
};

const audi = {
  brand: "audi",
};

function getBrand(prefix) {
  console.log(prefix + this.brand);
}

// getBrand("honda");
getBrand.call(honda); // without parameter
getBrand.call(honda, "It is a "); // with parameter

getBrand.call(audi, "It is an ");

/* ------ APPLY ----- */
// Only accepts array as an argument
getBrand.apply(honda, ["It'a a "]);
getBrand.apply(audi, ["It'a an "]);

// ----- Implicit binding => look for the left side of the dot

// Ex: person.printPersonName() this refers to person object

// Ex:
const user = {
  name: "Tyler",
  age: 27,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
  mother: {
    name: "Stacey",
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  },
};

user.greet(); // this refers to user object
user.mother.greet(); // this refers to mother object

// Proof that functions in JS are also objects
function Sum() {
  //
}
Sum.fname = "this is name";
console.log(Sum.fname); // this is name

// ----- Explicit binding => .call and .apply

function letsGreet(l1, l2, l3) {
  console.log(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  );
}

const user2 = {
  name: "Tyler",
  age: 27,
};

const languages = ["JavaScript", "Ruby", "Python"];

letsGreet.call(user2, languages[0], languages[1], languages[2]);
letsGreet.apply(user2, languages);

/* ------ BIND ----- */
// ----- Explicit binding

const pet = {
  breed: "chihuahua",
  info: function () {
    // console.log("info");
    console.log(this.breed);
  },
};

pet.info(); // chihuahua

const copyOfInfo = pet.info;
copyOfInfo(); // undefined;
// console.log("copyOfInfo", copyOfInfo);

// fix using bind()
const copyOfInfo2 = pet.info.bind(pet);
copyOfInfo2(); // chihuahua

// more complext example for bind()
const user3 = {
  name: "Tyler",
  age: 27,
  languages: ["JavaScript", "Ruby", "Python"],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`;

    const langs = this.languages.reduce(
      function (str, lang, i) {
        if (i === this.languages.length - 1) {
          return `${str} and ${lang}.`;
        }

        return `${str} ${lang},`;
      }.bind(this),
      ""
    );

    alert(hello + langs);
  },
};

// normal function vs arrow function
// this is dyamic inside a regular function
// arrow functions doesn't have its own context

const person2 = {
  fName: "John",
  printPersonName: function () {
    console.log(this.fName);
  },
};

const person3 = {
  fName: "John",
  printPersonName: () => {
    // console.log(this);
    console.log(this.fName);
  },
};

person2.printPersonName(); // John => this === person2
person3.printPersonName(); // undefined => this === window

/* ------ use strict ----- */
//  javascript strict mode

myFunction();

function myFunction() {
  //   "use strict";
  y = 3.14; // This will also cause an error because y is not declared
}

let x = 3.14;
delete x;

/* ------ CURRYING ----- */

// simple function
const multiply = (a, b, c) => {
  console.log(a * b * c);
};

// curry function
const multiplyWithCurry = (a) => {
  return (b) => {
    return (c) => {
      console.log(a * b * c);
    };
  };
};

multiply(1, 2, 3);
multiplyWithCurry(1)(2)(3);
