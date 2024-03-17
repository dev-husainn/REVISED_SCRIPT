/*To determine the current type of the value stored in a variable, you use the typeof operator: */

/*
let counter = 120;
console.log(typeof(counter)); // "number"

counter = false; 
console.log(typeof(counter)); // "boolean"

counter = "Hi";
console.log(typeof(counter)); // "string"

/*Output:
"number"
"boolean"
"string"  */

/* ------------------------------------ - ----------------------------------- */

let score = 33
console.log(typeof(score));

let score1 = "33"
console.log(typeof(score1));                  //string

let valueInNumber = Number (score1)          //yha pe jo string hai (score1) wo number me convert ho jayega so output is 33.
console.log(valueInNumber);

let nums = "33abc"
let numNaN = Number(nums)
console.log(numNaN);                        // here output will be NaN -> Not a Number..

let bool = true;
let bool2 = Number(bool)
console.log(bool2);

let str = "husain"
let str2 = Number(str)
console.log(str2);                         // here output will be NaN bcoz string cannot be converted in number...


let one = 1
let two = Boolean(one)                    //Jaise Number hota hai waise hi Boolean hota hai Here Output will be true.
console.log(two);





