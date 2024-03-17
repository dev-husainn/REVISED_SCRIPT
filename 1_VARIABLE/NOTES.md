<!-- ----------------------------------------------------------------------- -->
<!--                               !VARIABLES                                -->
<!-- ----------------------------------------------------------------------- -->

#VARIABLES := Variables are the container for storing the values.

In a programming language, variables are used to store data values.

JavaScript uses the keywords var, let and const to declare variables.

An equal sign is used to assign values to variables.

JavaScript Variables can be declared in 4 ways:

1-Automatically
2-Using var
3-Using let
4-Using const

<!-- ---------------------------------- # ---------------------------------- -->

An expression is a combination of values, variables, and operators, which computes to a value.

The computation is called an evaluation.

For example, 5 * 10 evaluates to 50:

<!-- -------------------------------- let---------------------------------- -->

The let keyword was introduced in ES6 (2015)

Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope

<!-- ---------------------------------- # ---------------------------------- -->

BLOCK SCOPE :->

Before ES6 (2015), JavaScript did not have Block Scope.

JavaScript had Global Scope and Function Scope.

ES6 introduced the two new JavaScript keywords: let and const.

These two keywords provided Block Scope in JavaScript.

Example:->
Variables declared inside a { } block cannot be accessed from outside the block:

{
  let x = 2;
}
// x can NOT be used here

<!-- ---------------------------------- # ---------------------------------- -->

GLOBAL SCOPE : - > 

Variables declared with the var always have Global Scope.

Variables declared with the var keyword can NOT have block scope

Example
Variables declared with var inside a { } block can be accessed from outside the block:

{
  var x = 2;
}
// x CAN be used here

<!-- ---------------------------------- # ---------------------------------- -->

Cannot be Redeclared:-

Variables defined with let can not be redeclared.

You can not accidentally redeclare a variable declared with let.

With let you can not do this:

let x = "John Doe";

let x = 0;

<!-- ---------------------------------- # ---------------------------------- -->

Can be Redeclared:-

Variables defined with var can be redeclared.

With var you can do this:

var x = "John Doe";

var x = 0;

<!-- ---------------------------------- # ---------------------------------- -->

REDECLARING VARIABLES :->> 

Redeclaring a variable inside a block will also redeclare the variable outside the block:
Example
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2


Redeclaring a variable using the let keyword can solve this problem.
Redeclaring a variable inside a block will not redeclare the variable outside the block:

Example
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10



<!-- -------------------------------- const -------------------------------- -->

JavaScript Const :-

The const keyword was introduced in ES6 (2015)

Variables defined with const cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope

Cannot be Reassigned
A variable defined with the const keyword cannot be reassigned:

Example
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

Correct =>    const PI = 3.14159265359;

Incorrect =>        const PI;
                    PI = 3.14159265359;


Always declare a variable with const when you know that the value should not be changed.
Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp

Example
const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10


Reassigning an existing const variable, in the same scope, is not allowed:

Example
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}



Redeclaring a variable with const, in another scope, or in another block, is allowed:
Example
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}


<!-- ---------------------------------- - ---------------------------------- -->

SUMMARY-->>

var jo hai wo global scope hai usko khi se v access kr skte h 
var re declare ho skta hai aur re initiallize bhi ho skta h .

let aur const block scope {} hai unko { } block ke bahr se access nhi kiya ja skta hai 
let redeclare nhi hota hai lekin re initialize ho skta h .
const na redeclare hota hai aur na hi reinitiliaze. 