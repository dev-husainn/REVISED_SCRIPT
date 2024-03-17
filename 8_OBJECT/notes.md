
<!-- ------------------------------- {OBJECT} -------------------------------- -->



Object = An object is a collection of property and methods.


Object =  In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.


NOTE = We use dot notaion when we have to access the keys value.


The key of a property can be a string. The value of a property can be any value, e.g., a string, a number, an array, and even a function.


<!--
 To create an object with properties, you use the key:value within the curly braces. For example, the following creates a new person object {} .
 -->

let person = {
    firstName: 'John',
    lastName: 'Doe'
}; 



Note = When we have to delete any property or value from the object we use the "delete" keyword
Exp = delete person.age;




<!-- Modifying the value of a property -->

To change the value of a property, you use the assignment operator (=). For example:

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.firstName = 'Jane';

console.log(person);




<!-- ------------------------------- Summary ------------------------------- -->

An object is a collection of key-value pairs.

Use the dot notation ( .) or array-like notation ([]) to access the property of an object.

Use the delete operator to remove a property from an object.

Use the in operator to check if a property exists in an object.












<!--  -------------------------- OBJECT-DESTRUCTURING --------------------------  -->



<!-- SYNTAX :- -->

let { property1: variable1, property2: variable2 } = object;


<!---->

Object destructuring is a feature in JavaScript that allows you to extract values from objects and bind them to variables in a more concise and convenient way.

<!-- Example -->

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

// Object destructuring
const { firstName, lastName, age } = person;

console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
console.log(age);       // Output: 30
