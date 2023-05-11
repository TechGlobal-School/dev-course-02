/* ----- HOISTING ---- */

// Variable hoisting

// var x = 10;
var x;

console.log(x);

x = 10;

// Hoisting in let and const
// JS hoists both let and const but it doesn’t initialize those variables

// console.log("y", y); // ReferenceError: Cannot access 'y' before initialization

let y = 11;

// console.log("z", z); // ReferenceError: Cannot access 'y' before initialization

const z = 12;

/*
 ReferenceError: Cannot access 'y' before initialization
 is not the same erorr as 
 ReferenceError: 'y' is not defined
*/

// Function hoisting

console.log(getSum()); // getSum

function getSum() {
  console.log("getSum");
}

// Function expression

// console.log(getSum2()); // ReferenceError: Cannot access 'getSum2' before initialization

const getSum2 = () => {
  console.log("getSum2");
};

/* ----- SCOPE ---- */

// 1. Global Scope
// 2. Local Scope => Block Scope etc.

const user = "Joe"; // in global scope

{
  console.log(user); // accessible
}

// block scope
if (true) {
  var blockScopedVar = "Doe"; // available outside block scope
  let blockScopedLet = "Doe1"; // block scoped
  const blockScopedConst = "Doe2"; // block scoped
  console.log(user); // accessible
}

function logUser() {
  const innerUser = "Jane"; // local scoped variable
  //   let innerUser = "Jane1"; // local scoped variable
  //   var innerUser = "Jane2"; // local scoped variable
  console.log(user); // accessible
}
logUser();

// console.log(innerUser); // ReferenceError: innerUser is not defined

console.log(blockScopedVar); // Doe
// console.log(blockScopedLet); // ReferenceError: blockScopedLet is not defined
// console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined

/* ----- CLOSURE ---- */

function outer() {
  // this has access to only global variables
  const animal = "Cow";
  //   console.log(isHuman);
  function inner() {
    console.log(animal);
    const isHuman = false;
    // this has access to all global and outer scope variables
  }
}
outer();

// -----------

function outer2() {
  // own lexical context
  const animal = "Cowwwww";
  function inner2() {
    // own lexical context
    console.log(animal);
  }
  return inner2;
}

// own lexical context somewhere far away
// but it knows animal variable
const myInnerFunction = outer2();
myInnerFunction();
