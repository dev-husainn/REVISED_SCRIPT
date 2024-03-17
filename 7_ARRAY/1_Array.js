const myArr = ["husain","ahmad","ansari"]

// console.log(myArr);


// You can also create an array, and then provide the elements:

const name = [];

name[0]= "husain";

name[1]= "ahmad";

name[2]= "ansari";

// console.log(name);













/* --------------------------------- Methods -------------------------------- */

const newArr = ["one","two","three"]

newArr.push("four")

console.log(newArr);



/* ------------------------------------ - ----------------------------------- */


const newArr2 = ["one","two","three"]

newArr2.pop();

console.log(newArr2);




/* ------------------------------------ - ----------------------------------- */


const newArr3 = ["one","two","three"]

console.log(newArr2.length);                //length is property not a method().



/* ------------------------------------ - ----------------------------------- */


const newArr4 = ["one","two","three"]

console.log(newArr4.toString());



/* ------------------------------------ - ----------------------------------- */


const newArr5 = ["one","two","three"]

console.log(newArr5.at(2));                //at() works same as [n]



/* ------------------------------------ - ----------------------------------- */



const newArr6 = ["one","two","three"]

newArr6.shift();

console.log(newArr6);



/* ------------------------------------ - ----------------------------------- */



const newArr7 = ["one","two","three"]

newArr7.unshift("Four");

console.log(newArr7);



/* ------------------------------------ - ----------------------------------- */



const myGirls = ["Cecilie", "Lone"];

const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);



/* ------------------------------------ - ----------------------------------- */

// Example (Merging Three Arrays)



const arr1 = ["Cecilie", "Lone"];

const arr2 = ["Emil", "Tobias", "Linus"];

const arr3 = ["Robin", "Morgan"];

const myChildren1 = arr1.concat(arr2, arr3);

console.log(myChildren1);



/* ------------------------------------ - ----------------------------------- */



const array1 = [[1,2],[3,4],[5,6]];

const array2 = array1.flat();

console.log(array2);




/* ------------------------------------ - ----------------------------------- */



const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits);





/* ------------------------------------ - ----------------------------------- */



const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const citrus = fruit.slice(1);

console.log(citrus);  




/* ------------------------------------ - ----------------------------------- */



const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

fruits1.sort();

console.log(fruits1);



/* ------------------------------------ - ----------------------------------- */



const months = ["Jan", "Feb", "Mar", "Apr"];

const sorted = months.toSorted();

console.log(sorted);




/* ------------------------------------ - ----------------------------------- */


