/* ---------------------------------- DATE ---------------------------------- */

//Date is an object, we can declare Date() as =  new Date or simply Date().

/* -------------------------------- newDate() ------------------------------- */

const d = new Date();
// console.log(d);

/* -------------------------- new Date(date string) ------------------------- */

const e = new Date("October 13, 2014 11:13:00");
// console.log(e);


/* ------------ new Date(year,month,day,hours,minutes,seconds,ms) ----------- */

const multipleString =  Date(2018, 11, 24, 10, 33, 30, 0);
// console.log(multipleString);

//Output 2018-12-24T05:03:30.000Z  //JavaScript counts months from 0 to 11


/* -------------------- When giving month higher that 11 -------------------- */


const higherMonthThat11 = new Date(2018, 15, 24, 10, 33, 30);
// console.log(higherMonthThat11);

//2019-04-24T05:03:30.000Z .Yha hmne month 15 diya hai to JS ka engine use 11+4 kr dega 11= december and +4 = april.




/* --------------------------------- METHODS -------------------------------- */



/* ------------------------------- toString() ------------------------------- */

const newDay = new Date()
console.log(newDay.toString());   //Sun Feb 11 2024 19:34:44 GMT+0530 (IST)


/* ----------------------------- toDateString() ----------------------------- */

const newDay1 = new Date()
 console.log(newDay1.toDateString());                         //Sun Feb 11 2024


 /* ---------------------------- toLocaleString() ---------------------------- */

 const newDay2 = new Date()
 console.log(newDay2.toLocaleString());                       //2/11/2024, 7:41:21 PM


 