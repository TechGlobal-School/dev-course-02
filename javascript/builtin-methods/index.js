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

// STRING METHODS
// length vs length() vs len()

const sent = "Hello world!";
console.log(sent.length);

// indexOf vs lastIndexOf

const sent1 = "This phone is an old phone";

console.log(sent1.indexOf("phone"));
console.log(sent1.indexOf("i"));
console.log(sent1.lastIndexOf("phone"));
console.log(sent1.lastIndexOf("e"));

// replace
console.log(sent1.replace("phone", "iphone")); // This iphone is an old phone
console.log(sent1.replaceAll("phone", "iphone")); // This iphone is an old iphone

// concat
console.log(sent.concat(" ", sent1));
console.log(sent + " " + sent1);
console.log(`${sent} ${sent1}`);

// charAt
console.log(sent1.charAt(8));

// split
const sent2 = "hello hey";
const sent3 = "hello | hey | $ yes";
console.log(sent2.split());
console.log(sent2.split(""));
console.log(sent2.split(" "));
console.log(sent3.split("|"));
console.log(sent3.split("$"));

// slice
console.log(sent2.slice()); // whole text
console.log(sent2.slice(2)); // llo hey
console.log(sent2.slice(0, 5)); // hello
console.log(sent2.slice(5, 0)); // empty
console.log(sent2.slice(-5, -1)); // o he

// substring - treats negative values differently than slice()
console.log(sent2.substring()); // whole text
console.log(sent2.substring(2)); // llo hey
console.log(sent2.substring(0, 5)); //  hello
console.log(sent2.substring(5, 0)); // hello
console.log(sent2.substring(-5, -1)); // treats as 0
console.log(sent2.substring(0, 0)); // treats as 0

// ARRAY METHODS
const fruits = ["Apple", "Banana", "Kiwi", "Strawberry", "Orange"];

console.log(typeof fruits); // object
console.log(Array.isArray(fruits)); // true
// console.log(isArray(fruits)); // error

// length  and toString
console.log(fruits.length);
console.log(fruits.toString());

// join
console.log(fruits.join());
console.log(fruits.join("-"));
console.log(fruits.join("%"));
console.log(fruits.join("$"));
console.log(fruits.join(" "));
console.log(typeof fruits.join(" "));

// "hello world" => "hello-world"
console.log("hello world".split(" ").join("-"));

// pop and push
console.log(fruits.pop()); // Orange
console.log(fruits); // ['Apple', 'Banana', 'Kiwi', 'Strawberry']
fruits.push("Orange"); // at to the end
console.log(fruits); // ['Apple', 'Banana', 'Kiwi', 'Strawberry', 'Orange']

// shift and unshift
console.log(fruits.shift()); // Apple
console.log(fruits); // ['Banana', 'Kiwi', 'Strawberry', 'Orange']
fruits.unshift("Apple");
console.log(fruits); // ["Apple", "Banana", "Kiwi", "Strawberry", "Orange"];

// splice
const f1 = fruits.splice(1, 1, "Peach"); // replace
console.log(f1); // ["Banana"]
console.log(fruits); // ['Apple', 'Peach', 'Kiwi', 'Strawberry', 'Orange']

fruits.splice(0, 1); // remove
console.log(fruits); // ["Peach", "Kiwi", "Strawberry", "Orange"];

fruits.splice(0, 0, "Apple"); // add
console.log(fruits); // ["Apple", "Peach", "Kiwi", "Strawberry", "Orange"];

// toSpliced - check for browser compatiblity
const f2 = fruits.toSpliced(0, 1);
console.log(f2); // ['Peach', 'Kiwi', 'Strawberry', 'Orange']

// concat();
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4]
console.log([...arr1, ...arr2]); // [1, 2, 3, 4]

// slice
console.log(fruits); // ["Apple", "Peach", "Kiwi", "Strawberry", "Orange"];
const slicedPortion = fruits.slice(0, 1);
const slicedPortion2 = fruits.slice(0, 6); // - no error
console.log(slicedPortion); // ['Apple']
console.log(slicedPortion2); // ['Apple', 'Peach', 'Kiwi', 'Strawberry', 'Orange']
console.log(fruits); // ["Apple", "Peach", "Kiwi", "Strawberry", "Orange"];

// forEach
fruits.forEach(function (fruit) {
  console.log(fruit);
});
fruits.forEach((fruit) => {
  console.log(fruit);
});
fruits.forEach((fruit) => console.log(fruit));

// extract callback to its own function
const logItems = (item) => {
  console.log(item);
};
fruits.forEach(logItems);

// for of
for (const fruit of fruits) {
  console.log(fruit);
}

// reverse
console.log(fruits.reverse()); // ['Orange', 'Strawberry', 'Kiwi', 'Peach', 'Apple']

// some
console.log(fruits.some((fruit) => fruit.startsWith("A"))); // true
console.log(fruits.some((fruit) => fruit.startsWith("T"))); // false

// sort
console.log(fruits.sort()); // ['Apple', 'Kiwi', 'Orange', 'Peach', 'Strawberry']
console.log([4, 6, 3, 10].sort()); // [10, 3, 4, 6]
console.log([4, 6, 3, 10].sort((a, b) => a - b)); // [3, 4, 6, 10]
console.log([4, 6, 3, 10].sort((a, b) => b - a)); // [10, 6, 4, 3]
// sort dates?

// map
const mapFruits = fruits.map((fruit) => fruit + "$");
console.log(mapFruits);

const filteredFruits = fruits.filter((fruit) => fruit.includes("e"));
console.log("filteredFruits", filteredFruits); // ['Apple', 'Orange', 'Peach', 'Strawberry']

// reduce

const numbers = [1, 2, 3, 4];
// Calculate the sum of array items

let sum = 0;
numbers.forEach((n) => (sum += n));
// 0 + 1
// 0 + 2
// 0 + 3
// 0 + 4
console.log("sum", sum);

const sum2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
  // 0 + 1
  // 1 + 2
  // 3 + 3
  // 6 + 4
  // return 10
}, 0); // initalValue

console.log("sum2", sum2);

// OBJECT -----

// const person2 = new Object();

const person = {
  isHuman: true,
  sayHello: () => console.log("Hello"),
};

const me = Object.create(person);

me.name = "TG";
me.isHuman = false;

console.log(person);
console.log(me);
console.log(me.sayHello());

// Object.keys();
const allKeys = Object.keys(person);
console.log("allKeys", allKeys);

let keys = [];
for (let key in person) {
  // console.log(key);
  keys.push(key);
}

// Object.values()
const allValues = Object.values(person);
console.log("allValues", allValues);

let values = [];
for (let key in person) {
  values.push(person[key]);
}
console.log("values", values);

// Object.entries()

const allEntries = Object.entries(person);
console.log("allEntries", allEntries);

let entries = [];
for (let key in person) {
  entries.push([key, person[key]]);
}
console.log("entries", entries);

// Object.freeze()
Object.freeze(person);
person.isHuman = false;
console.log("person", person);

// Object.isFrozen()
console.log(Object.isFrozen(person)); // true

// Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source); // {a: 1, b: 4, c: 5}
console.log(returnedTarget);
console.log({ ...target, ...source }); // {a: 1, b: 4, c: 5}

// cihat, felicity
// rami, naim
// yasser, bilal
