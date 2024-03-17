/* --------------------------------- Nesting -------------------------------- */


const gitUser = {}

gitUser.id = "123"

gitUser.name = "Husain"

gitUser.isLoogedIn = false

// console.log(gitUser);


//OutPut = { id: '123', name: 'Husain', isLoogedIn: false }






const regularUser = {

    eamil : "Github@git.com",

    fullName : {

        userFullName : {

            firstName : "Husain",

            lastname : "Ahmad"
        }
    } 
}

// console.log(regularUser.fullName);

// console.log(regularUser.fullName.userFullName.firstName);



/* --------------------------- Merging the objects -------------------------- */


const first =  {1 : "a", 2 : "b" }

const second =  {3 : "c", 4 : "d" }

const third = {...first , ...second}   //Spread operator(...)  

// console.log(third);








/* -------------------------- OBJECT-DESTRUCTURING -------------------------- */


const course = {

    coursename: "js in hindi",

    price: "999",

    courseInstructor: "hitesh"

}

// console.log(course.courseInstructor);

// const {courseInstructor} = course  

const {courseInstructor : Instructor} = course 

//course object se value extract hoti hai ab {} is object ke andr hm likh skte h kya vaalue extract rna h to hme {courseInstructor} ko extract krna h hme courseInstructor ko chota name Instructor diya hai yha pe.. 

// console.log(Instructor);



/* ------------------------------------ - ----------------------------------- */


let person = {                                                               //Object

    firstName: 'John',

    lastName: 'Doe',

    currentAge: 28

};

let { firstName, lastName,  currentAge  } = person;                         //Object - Destructured.

// console.log(firstName); 

// console.log(currentAge);  


/* -------------------------------- -Example -------------------------------- */

const person2 = {
    firstName1: 'John',
    lastName2: 'Doe',
    age1: 30,
  };
  
  // Object destructuring
  const { firstName1, lastName2, age1 } = person2;
  
  console.log(firstName1); // Output: John
  console.log(lastName2);  // Output: Doe
  console.log(age1);       // Output: 30
  
