// ES6: New major version of JS, it introduced a lot of new features.

// let/const usage
if (true) {
    var oldImplemantation = "old way";
    let newLet = "new way let";
}

console.log(oldImplemantation);
// console.log(newLet); Gives error because let is block scoped.

let let1 = "new let";
let1 = "new let value";
console.log(let1);

const const1 = "new const";
// const1 = "update const"; Gives error because const is no reassignable.

let let2;
function someFunc() {
  let2 = "assign value";
}

// Activity: const & let
const statuses = [
  { code: "OK", response: "Request successful" },
  { code: "FAILED", response: "There was an error with your request" },
  { code: "PENDING", response: "Your reqeust is still pending" },
];

let message = "";
const currentCode = "OK";

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
    console.log(message);
  }
}

// -------------------------------------------------------

// Template Literals
const student = "John";
const teacher = "Mrs.Elany";
const studentMessOld = student + ' is ' + teacher + '\'s favorite student.'; // Old way
const studentMessage = `${student} is ${teacher}'s favorite student.`; // New way

console.log(studentMessage);
console.log(studentMessOld);

// Activity: template literals
const device_id = 25;
const guid = 654321;
const data = `{ device_id : ${device_id}, guid: ${guid} }`;
console.log(data);

const userName = "John";
function reverseName(name) {
    return name.split("").reverse().join("");
}
console.log(`My name is ${userName} and my name contains ${userName.length} letters. And reverse of my name is ${reverseName(userName)}`);

// -------------------------------------------------------

// Arrow Functions
// Old way 
function getExamples() {
  return fetch("https://example.com/")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      return response.data;
    })
    .then(function (data) {
      console.log(data);
    });
}

// New way with arrow functions
const getExamplesWithArrow = () => {
  return fetch("https://example.com/")
    .then((response) => response.json())
    .then((response) => response.data)
    .then((data) => console.log(data));
};

// -------------------------------------------------------

// Destruction
// Before...
const obj = { firstName: 'Mark', lastName: 'Twain', age: 40 };
console.log( `Welcome ${obj.userName} ${obj["lastName"]} ${obj.age}`);


const firstName = "John";
// After...
const { firstName: newFirstName, lastName, age } = obj;
console.log( `Welcome ${newFirstName} ${lastName} ${age}`);
console.log( `Welcome ${firstName} ${lastName} ${age}`);

// -------------------------------------------------------

// Default prop value
// Requirenment: Create a function that multiplies num1 with num2. If there is no num2 given, multiply with 2.
function multiplyWithDefaultValue(num1, num2 = 2) {
    // num2 = (num2 === undefined ? 2 : num2);
    return num1 * num2;
}
console.log(multiplyWithDefaultValue(5)); //10
console.log(multiplyWithDefaultValue(5, 10)); //50
console.log(multiplyWithDefaultValue(5, undefined)); //10


// Rest Parameter
const multiply = (n1, n2, n3, n4) => {
    const arr = [n1, n2, n3, n4];
    return arr.reduce((previousValue, currentValue) => previousValue * currentValue);
}

const multiplyWithRest = (...numbers) => {
    return numbers.reduce((previousValue, currentValue) => previousValue * currentValue);
}

console.log(multiply(1, 2, 3, 4));
console.log(multiplyWithRest(1, 2, 3, 4, 5, 6, 7)); // Easier and user can pass unlimited arguments

// Requirenment: Create a function that returns sum of all numbers + bonus number
function sum(bonusNumber, ...restOfTheNumbers) {
    restOfTheNumbers.push(bonusNumber);
    return restOfTheNumbers.reduce((previousValue, currentValue) => previousValue + currentValue);
}
console.log(sum(5, 2, 3, 4)); // 5 is bonus number, 2, 3, 4 are ...restOfTheNumbers


const favBands = ["Linkin Park", "Slipknot", "U2"];
console.log(favBands); // Prints out as array
console.log(...favBands); // Prints out as string

// Requirenment: add Rammstein by using rest operator
const newFavBand = ["Rammstein", ...favBands];
console.log(newFavBand);


const initalColors = ["white","black","gray"];
const exoticColors = ["purple","orange", "green"];

function join(initalColors,exoticColors){
    return [...initalColors,...exoticColors];
}
console.log(join(initalColors,exoticColors));


// Activity: rest
const average = (...numbers) => {
  //1st way
  /*
    return numbers.reduce(
      (previousNumber, currentNumber) =>
        (previousNumber + currentNumber)
    ) / numbers.length;
    */
  //2nd way
  let result = 0;
  numbers.forEach((num) => result += num/numbers.length);
  return result.toFixed(2);
};
console.log(average(2, 8, 5));
console.log(average(7, 1432, 12, 13, 100));


// Promise: don't worry with the details, we'll learn in depth in the upcoming classes.
const promise = new Promise((resolve, reject) => {
    resolve();
    // reject();
})

promise.then(() => console.log("Operation was successful")).catch(() => console.log("Failed!"));

