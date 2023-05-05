// 1 ---

const KEY = "white_rabbit";

// block scope
if (true) {
  const KEY = "ginger_rabbit";
  console.log(KEY);
}

// function scope
function Fun() {
  const KEY = "orange_rabbit";
}

// const KEY = "ginger_rabbit";
// KEY = "ginger_rabbit"; // error
console.log(KEY);

// you can override this const
const person = {
  name: "Joe",
};
person.name = "Kate";

console.log(person);

// 2 ---
// let x = 42;
// if (true) {
//   let x = 1337;
// }
// console.log(x);

// 3
// let x = 42;
// if (true) {
//   //   var x; // declaration
//   //   console.log(x); // undefined
//   //   x = 1337; // initilization
//   console.log(x);
//   //  let x = 1337;
// }

// function that doesn't take any parameter
const double = () => 2;
function double2() {
  return 2;
}
// Promise.then(() => console.log("response"));

// -------

// var x = `foo ${y}`;
//   y = `bar ${x}`;

// var x = `foo ${y}`;
// var y = `bar ${x}`;

// console.log(x);

// foo bar

// foo bar foo undefined
// foo undefined bar undefined

// -------

// let options = {
//   protocol,
//   url,
//   method,
//   callback
// };
// // same
// let options2 = {
//   protocol: protocol,
//   url: url,
//   method: method,
//   callback: callback,
// };

let numbers = [12, 7, 14];
const max = Math.max(numbers); // not working
const max2 = Math.max(12, 7, 14); // working

// spread operator
console.log("Spread operator ", ...numbers);

// Rest operator
function collectNums(...nums) {
  console.log("Rest operators ", nums);
}
function collectNums1(x, ...nums) {
  console.log("Rest operators ", nums);
}
// old days
function collectNums2() {
  let result = [];
  for (let i = 0; i < arguments.length; i++) {
    result = [...result, arguments[i]];
  }
  console.log("Arguments ", result);
}

collectNums(12, 7, 14, 100);
collectNums2(12, 7, 14, 100);

let myMax = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > myMax) {
    myMax = numbers[i];
  }
}
console.log(myMax);
console.log(max);
console.log(max2);

// default parameters
const fn = (p = 1) => 10 / p; // infinity

function stuff(x, y = 12) {
  // Do stuff..
  return [x, y];
}
console.log("stuff(2);", stuff(2));

function stuff2(x, y = x / 3) {
  // Do stuff..
  return [x, y];
}
console.log("stuff(2);", stuff2(6));

// -------
var obj = {
  foo: "FOO",
  bar: "BAR",
};

// obj.foo;
// obj.bar

// object desctructuring
var { foo, bar } = {
  foo: "FOO",
  bar: "BAR",
};

console.log("foo", foo); // "FOO"
console.log("bar", bar); // "BAR"

/*

1. obj.foo
9. obj.foo
27. obj.foo
130. obj.foo
1500. obj.foo

const { foo } = obj;
1. foo
9. foo
27. foo
130. foo
1500. foo

*/

// --------
// Array destructuring
var [first, , last] = [1, 2, 3];
console.log("first", first);
console.log("last", last);

// ----
function stuff3(a, x = 12, y = 42) {
  // Do stuff..
  console.log(a, x, y);
}
// stuff3(1, ,2); // illegal
stuff3(1, undefined, 2); // legal
stuff3(1, null, 2); // legal

// IIFE

// with name
(function IIFE() {
  console.log("IIFE");
})();
// IIFE(); // error

// without name
(function () {
  console.log("IIFE");
})(); // IIFE

// arrow function IIFE
(() => {
  console.log("IIFE");
})(); // IIFE

// IIFE with global arguments
const arg = 10;
(() => {
  console.log("IIFE ", arg);
})(); // IIFE

// IIFE with direct arguments
((arg1, arg2) => {
  console.log("IIFE ", arg1, arg2);
})(11, 13); // IIFE

// Callback function
function greeting(name) {
//   alert(`Hello, ${name}`);
}
// Callback function
function welcome(name) {
//   alert(`Welcome, ${name}`);
}

function processUserInput(fn) {
  //   const name = prompt("Please enter your name.");
  fn("Joe");
}

// later
processUserInput(greeting);
processUserInput(welcome);
