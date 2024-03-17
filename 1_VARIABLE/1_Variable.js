// #In this example, x is defined as a variable. Then, x is assigned (given) the value 6


let x;
x = 6;
console.log(x);

/* ------------------------------------ # ----------------------------------- */

/*In this first example, x, y, and z are undeclared variables.*/

// They are automatically declared when first used:
x = 4;
y = 6;
z = x + y;
console.log(z);

// Example using var
var a = 5;
var b = 6;
var c = a + b;
console.log(c);

// Example using let
let X = 5;
let Y = 6;
let Z = X + Y;
console.log(Z);

// Example using const
const num1 = 5;
const num2 = 6;
const num3 = num1 + num2;
console.log(num3);

// Mixed Example
const price1 = 5;                  //These are constant values and cannot be changed.
const price2 = 6;                  //These are constant values and cannot be changed.
let total = price1 + price2;
console.log(total);
/*The two variables price1 and price2 are declared with the const keyword.

These are constant values and cannot be changed.

The variable total is declared with the let keyword.

The value total can be changed.*/

