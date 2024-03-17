/* ----------------------------- Spread-Operator ---------------------------- */



const heroes = ["Ironman", "Thor","Captain","Hulk"]

const heroes2 = ["Superman", "Batman","Shaktiman","Hulk"]

const allHeroes = [...heroes,...heroes2]

console.log(allHeroes);



/* ------------------------------------ - ----------------------------------- */




const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

 const realArray = anotherArray.flat(Infinity) //yha depth dena pdta h

 console.log(realArray);




 /* ------------------------------------ - ----------------------------------- */



 const fruits = ["Banana", "Orange", "Apple", "Mango"];

let result = Array.isArray(fruits);

console.log(result);



/* ------------------------------------ - ----------------------------------- */


//.from() = Create an array from a string:


console.log(Array.from("HUSAIN"))


/* ------------------------------------ - ----------------------------------- */

let score1 = 100;

let score2 = 200;

let score3 = 300;

console.log(Array.of(score1,score2,score3));
