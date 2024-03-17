<!-- -

If either value is a string, the addition operator uses the following rules:

If both values are strings, it concatenates the second string to the first one.
If one value is a string, it implicitly converts the numeric value into a string and concatenates two strings.
For example, the following uses the addition operator to concatenate two strings:

let x = '10';
let y = '20';
let result = x + y;

console.log(result);  //Output = 1020

<!-- ---------------------------------- # ---------------------------------- -->

<!-- If either value is not a number, the JavaScript engine converts it into a number for division. For example:

let result = '20' / 2;       //20 string me h to js ka engine ise number me convert kr diya h
console.log(result);        //Output =  10     -->


 <!-- ------------------------ ARITHMETIC OPERATIONS ------------------------ -->

 +
 -
 *
 **
 /
 %


 <!-- ----------------------- COMPARISION OPERATIONS ------------------------ -->
 <
 <
 <=
 >=
 +=
 -=
 ==
 != 
<!-- ------------------------ pre&postfix operator ------------------------- -->
prefix == prefix me ++x (increment) phle value ko 1 se increase kr di turnt hi.Same --x(decrement) ke liye v hota hai  phle value ko 1 se decrease kr di turnt hi..

postfix == 