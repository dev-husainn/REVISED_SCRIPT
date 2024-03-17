/* --------------------------------- NUMBER --------------------------------- */

const score = 400;       //Yha to JS ka engine bta dega ki ye number hai..
console.log(score);
// console.log(typeof score);

const balance = new Number(100)   
console.log(balance);
//Agr hme explicitly ek Number hi define krna hai to hm new Number() method ka use kreneg..


/* ------------------------------- toString() ------------------------------- */

//toString hme number as a string return krta h .
const num = 2020;
console.log(num.toString());  




/* -------------------------------- toFixed() ------------------------------- */

//toFixed(n) = hme string return krta hai, hme kitne specified decimal number chaiye

const num2 = 9.656;
console.log(num2.toFixed(1));
console.log(num2.toFixed(2));
console.log(num2.toFixed(3));



/* ------------------------------ toPrecision() ----------------------------- */

const num3 = 12.895;
console.log(num3.toPrecision(2));
console.log(num3.toPrecision(3));
console.log(num3.toPrecision(4));
console.log(num3.toPrecision(5));


/* ---------------------------- toLocaleString() ---------------------------- */


//toLocaleString() = zero ki readbility ko bdhati h
const billion = 1000000;
console.log(billion.toLocaleString());         //1,000,000
console.log(billion.toLocaleString('en-IN')); //Indian format m output aayega == 10,00,000

