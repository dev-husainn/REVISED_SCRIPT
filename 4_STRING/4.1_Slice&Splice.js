/* ------------------------------------ .slice() ----------------------------------- */



const alpha = ["a" , "b" , "c" , "d" , "e" , "f" ]

const alpha2 = alpha.slice(1,4)  // yha index 1 = 'b' hai , 2= c ,3 = d , 4=e,but slice me index 4 ko ignore ke dete hai aur output n-1 index 3 tk hi aayega
console.log(alpha2);                             //  [ 'b', 'c', 'd' ]

const alpha3 = alpha.slice(3,5) /*yha v n-1 tk value aayi h index 3 = d , 4= e , index 5 = f but slice me n-1 tk   value  aati hai to yha index 4 ='e'  tk value aayega. */

console.log(alpha3);                            //  [ 'd', 'e' ]

/*
alpha.slice(1,4) = yha 4 pe n-1 tk hi value aayega total 4 tk value nhi milegi 




/* ------------------------------------ .splice()----------------------------------- */


// At position 2, remove 2 items:

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
const fruits2 = fruits.splice(2, 2)              //Yha pe splice ye keh rha ki hme 2nd position se sirf 2 element do
console.log(fruits2);                           //output = [ 'Apple', 'Mango' ]

const Name = [ "ted" , "tim", "ton", "sam", "sor", "sod"]

// Name.splice(1,2,"Hi");  //Yha 1st position se 2nd position tk ke element remove ho jayenge aur unke jgh pe "Hi" add ho jayega..


Name.splice(1,4,"hi", "hello","goodday")   //Yha 1st position se th position tk ke element remove ho jayenge aur unke jgh pe "Hi","hello", "gooday" add ho jayega
console.log(Name);


/* ------------------------------------ NOTES ----------------------------------- */

/*
.slice() = .slice() returns selected array elements as a new array: //Slice ka output array ke form me aata h
Syntax ->> 
array.slice(start, end)


.splice = The splice() method adds and/or removes array elements.

<!-- The most important difference between splice and slice is that splice changes the actual array while slice creates a new copy of the array -->*/