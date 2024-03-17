/* --------------------------------- STRING --------------------------------- */

/*
let namee = "Husain"
console.log(namee);
console.log(namee[1]);
console.log(namee.length);
console.log(namee.toUpperCase());
console.log(namee.toLowerCase());
console.log(namee.charAt(4));
console.log(namee.indexOf('s'));
console.log(namee.substring(0,4));

/* ------------------------------------concat() ----------------------------------- */

let firstName = "Irshad";
let SecondName = "Ahmad";
let fullName = firstName .concat(SecondName)
// console.log(fullName);         

/* -------------------------------- include() ------------------------------- */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const includess = fruits.includes("Mango");
// console.log(includess);


/* --------------------------------- .flat() -------------------------------- */

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
// console.log(newArr);  //output = [ 1, 2, 3, 4, 5, 6 ]


/* --------------------------------- .join() -------------------------------- */

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits2.join();
// console.log(text);  // join method array ko string me convert kr deta hai ...OUTPUT = Banana,Orange,Apple,Mango


/* --------------------------------- .pop() --------------------------------- */

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.pop();
console.log(fruits3);  //pop() - array ke last element ko remove krta hai...OUTPUT = ['Banana', 'Orange', 'Apple']



/* --------------------------------- .push() -------------------------------- */

const fruits4 = ["Banana" ,"Orange", "Apple", "Mango"];
fruits4.push("Kiwi", "Lemon");
console.log(fruits4); //push() method array ke end (akhiri) me elements ko add krta hai... OUTPUT=[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Lemon' ]


/* -------------------------------- .shift() -------------------------------- */

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.shift();
console.log(fruits5); //shift() array ke first element ko remove kr deta h ..OutPut = [ 'Orange', 'Apple', 'Mango' ]


/* ------------------------------- .unshift() ------------------------------- */


const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.unshift("Lemon","Pineapple");
console.log(fruits6); //unshift() array ke begining me element add krta h isme parameters pass hote h jo add krne h. 
                    //OutPut = [ 'Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango' ]


                    