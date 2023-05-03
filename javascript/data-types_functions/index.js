
// DATA TYPES
var zooAnimals = ["Rhino", "Zebra", "Giraffe", "Owl"];
// Prints 4 to the console because there are 4 items in our zooAnimals array.
console.log(zooAnimals.length);

zooAnimals.forEach(animal => console.log(animal));

window.prompt();
prompt();


var favBands = ["Beatles", "Green Day", "Owl City", "Coldplay"];
// Arrow function
favBands.forEach(band => console.log(band));
favBands.push(window.prompt("What’s your favorite band?"));
favBands.forEach(band => console.log(band));


var gandalf = {
  "real name": "Gandalf",
  "age (est)": 11000,
  "race": "Maia",
};


console.log(gandalf.race);
console.log(gandalf["race"]);

gandalf.race = "New Race";
gandalf.newProp = "New prop";
delete gandalf["real name"];

console.log(gandalf);


var movieCharacters = ["Batman", "Joker"];
movieCharacters.push(gandalf);
console.log(movieCharacters);

var user = {};

user.name = "John";
user.lastName = "Doe";

user.name = "Chris";
delete user.lastName;


user.intrests = ["reading", "singing", "rugby"];

user.intrests.forEach(intrest => console.log(intrest));


// FUNCTIONS
function productOfFour(num1, num2, num3, num4){
    return num1*num2*num3*num4;
}
console.log(productOfFour(5,5,5,5));;

function hello(fname, mname, lname){
    alert("Hello " + fname + " " + mname + " " + lname)
}
hello("Yasser", "Z", "Alsilwadi");

function hello(fName, lName, mName){
    return alert("Hello " + fName + " " + mName + " " + lName);
    // String or Template literals, introduced with ES6
    return alert(`Hello ${fName} ${mName} ${lName}`);
}

hello("Bilal", "E", "Alsilwadi");


// SCOPES
var globalVar = "global"; // global scope
console.log(globalVar);

function outerFunction() {
    var outerVar = "outer"; // local scope, accessed within function
    console.log(globalVar);
    console.log(outerVar);
    function innerFunction () {
        var innerVar = "inner"; // local scope, accessed within function
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar);
    }
    return innerFunction();
}
outerFunction();


// ACTIVITY: percentage of the world
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
console.log(fixedPercentage);
console.log("China population:", percentageOfWorld1(1441) + "%");

var globalPopulation = 7900000000;
var usPopulation = 331900000;
var chinaPopulation = 1441000000;
var canadaPopulation = 39240000;


function percentageOfWorld1(population){
    return ((population/globalPopulation)*100).toFixed(2); // used toFixed() to display only 2 decimals
}
var percentageOfWorld2 = function(population){
    return ((population/globalPopulation)*100).toFixed(2);
}


var usPopulationPercent = percentageOfWorld1(usPopulation)
var chinaPopulationPercent = percentageOfWorld1(chinaPopulation)
var canadaPopulationPercent = percentageOfWorld1(canadaPopulation)

console.log("US population: ",usPopulationPercent);
console.log("China population: ",chinaPopulationPercent);
console.log("Canada population: ",canadaPopulationPercent);

var usPopulationPercent2 = percentageOfWorld2(usPopulation)
var chinaPopulationPercent2 = percentageOfWorld2(chinaPopulation)
var canadaPopulationPercent2 = percentageOfWorld2(canadaPopulation)

console.log("US population: ",usPopulationPercent2);
console.log("China population: ",chinaPopulationPercent2);