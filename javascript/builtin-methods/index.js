console.log("---- Number Methods ----");

// toString
var num = 10;
console.log(num.toString()); // '10'
console.log(typeof num.toString()); // string

// toFixed
var num2 = 10.102;
console.log(num2.toFixed()); // '10'
console.log(num2.toFixed(2)); // '10.10'
console.log(num2.toFixed(3)); // '10.102'
console.log(typeof num2.toFixed()); // string

// toPrecision
console.log(num2.toPrecision()); // '10.102'
console.log(num2.toPrecision(2)); // '10'
console.log(num2.toPrecision(3)); // '10.1'
console.log(typeof num2.toPrecision()); // string

// Number()
var num3 = (20).toFixed();
console.log(num3); // '20'
console.log(typeof num3); // string

console.log(Number(num3)); // 20
console.log(Number("10" + "40")); // 1040
console.log(Number(10 + 40)); // 50
console.log(Number("50 20")); // NaN (Not a Number)
console.log(Number("some text 20")); // NaN (Not a Number)
console.log(Number("20 some text")); // NaN (Not a Number)

// parseInt
// console.log(Number.parseInt(num3)); // 20 // same as below
console.log(parseInt(num3)); // 20
console.log(parseInt("10" + "40")); // 1040
console.log(parseInt(10 + 40)); // 50
console.log(parseInt("50 20")); // 50 (first value)
console.log(parseInt("some text 20")); // NaN (Not a Number)
console.log(parseInt("20 some text")); // 20 (first value)

// parseFloat
console.log(parseFloat("10.203"));
console.log(parseFloat("-10.203"));
console.log(typeof parseFloat("10.203"));
console.log(typeof parseFloat("-10.203"));

// MAX_VALUE (MAX_SAFE_VALUE)
// MIN_VALUE (MIN_SAFE_VALUE)
// NEGATIVE_INFINITY
// POSITIVE_INFINITY
// NaN

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(10 / 0); // Infinity

console.log("NaN", NaN);

const isNumber = "false";
// const isNumber = NaN;
// const isNumber = "random text" / 9; // NaN

// Number.isNaN();
if (isNaN(isNumber)) {
  console.log("Yes it is not a number");
}
