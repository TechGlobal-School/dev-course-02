// Console ---------------
console.log("Log coming from index.js");
console.warn("Warning");
console.error("Error"); // see console.error

// Activity ---------------
console.log(4 + 3);
document.write("Hello from index.js ");
document.write(4 + 3);
// alert("Are you ready?");

// Variables ---------------
// int a = 10;
// String b  = "hello";
var a = 10;
var b = "This is string";
console.log("a", a);
console.log("b", b);

// Avoid reserved words  ---------------

// var char = "A"; // ???
// var public = "public"; // ???
// var break = "break";
// var new = "new";
// console.log("char", char);
// console.log("public", public);

// Activity ---------------
var age = 20;
var year = 2000;
console.log(age);
console.log(year);

// Numbers ---------------

// float
// double
// int

var num1 = 10;
var num2 = -50;
var num3 = 11.4556;

// Basics arithmetic operators with numbers
console.log(num1 + num2); // -40
console.log(num1 - num2); // 60
console.log(num1 * num2); // -500
console.log(num1 / num2); // -0.2
console.log(num1++); // 10 // post increment
console.log(num1--); // 11 // post decrement
console.log("num1", num1); // 10
console.log(++num1); // 11 // pre increment
console.log(--num1); // 10 // pre decrement
console.log("num1", num1); // 10

// String ---------------

// We can use single or double quotes
var fName = "John";
var lName = "Doe"; // 'Doe'

console.log(fName + " " + lName);
// console.log('Basketbal\'s a great sport!');

// Boolean ---------------
var isHuman = true;
var isRobot = false;
console.log(isHuman); // true
console.log(isHuman === true); // true
console.log(isRobot); // false
console.log(isRobot === true); // false
console.log(isRobot === false); // false

// == vs ===
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(true == "true"); // false
console.log(true === "true"); // false

// Loops ---------------

// If else if else
var isTrue = true;
// var isTrue = false;
// var isTrue = null;

if (isTrue) {
  console.log("Yes it is true");
} else if (isTrue === false) {
  // isTrue !== true
  // !isTrue - logical operator
  console.log("No, its not true");
} else {
  console.log("something else");
}

// Logical Operators - && and || ---------------

if (true && false) {
  console.log("Both true");
}
if (false || true) {
  console.log("Either one is true");
}

// while loop and do while loop

var max = 1;
while (max < 4) {
  console.log("while loop");
  max = max + 1;
  // max++
}

var max2 = 1;
do {
  console.log("do while loop");
  max2 = max2 + 1;
} while (max2 < 4);

// for loop
for (let i = 0; i < 3; i++) {
  console.log("i", i);
}

for (let i = 0; i < 3; i++) {
  // if()
  // nested for loops
  // while loop
}

// switch statement
var day = "Monday";

switch (day) {
  // bunch of logic
  case "Monday": {
    console.log("its monday");
  }
  case "Tuesday": {
    console.log("its tuesday");
  }
  default: {
    console.log("No days match");
  }
}

// prompt  - activity example
// const ans = prompt("What is your goal for today?");
const ans = "sleep";
console.log(ans); // either returns value or null

switch (ans) {
  case "sleep": {
    console.log("Your answer is sleep");
    break;
  }
  case "study": {
    console.log("Your answer is study");
    break;
  }
  default: {
    console.log("Your answer is null");
  }
}

/*

- console methods
- document.write, alert, prompt
- variables
- simple data types (numbers, string etc.)
- operators
- loops (while, for, switch)

*/
