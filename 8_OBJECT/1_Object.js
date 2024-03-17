/* --------------------------------- OBJECT --------------------------------- */


const JsUser = {

    name : "husain",

    age : 25,

    location : "Deoria",

    email : "husain@chatgpt.com",

    isLoggedIn : true,

    loggedInDays : ["saturday" , "monday"],


}

JsUser.name2 = "Ansari";                 // Adding a new property to an object

delete JsUser.isLoggedIn;                // Deleting a property of an object

// console.log(JsUser);

// console.log(JsUser.name);

// console.log(JsUser.age);

// console.log(JsUser.isLoggedIn);

console.log(Object.keys(JsUser));  

console.log(Object.values(JsUser));

console.log(Object.entries(JsUser));



/* ------------------------------------ - ----------------------------------- */



const person = {

    fullNames : "Hassan Ahmad ",

    age : 23,

    "birthdayMonth" : "October",

    'building no': 3960,

}

// console.log(person.fullNames);

// console.log(person.age);

// console.log(person.birthdayMonth);                 

// console.log(person["building no"]);       //Accesing by Array-like notation ( [] ).

                                             // If you use the dot notation, you’ll get an error:

                                        



/* ------------------------------------ - ----------------------------------- */


const persons = {

    firstName: "John",

    lastName : "Doe",

    id       : 5566,

    fullName : function() {

      return this.firstName + " " + this.lastName;

    }

  }

  // console.log(persons.fullName());  
  

  //Full name ke andr method bnaya gya hai isiliye fullName() paranthesis ke sath aise likha gya hai console me.



  /* ----------------------------------Modifying the property----------------------------------- */


  let person3 = {

    firstName: 'John',

    lastName: 'Doe'
};

person.firstName = 'Jane';

// console.log(person);





/* ------------------------------------Checking if a property exists ----------------------------- */


//To check if a property exists in an object, you use the 'in' operator:


let employee = {

  firstName: 'Peter',

  lastName: 'Doe',

  employeeId: 1

};

console.log('Peter' in employee);                           

console.log('Doe' in employee);
                                                             //Using 'in' operator.
console.log('lastName' in employee);

console.log('employeeId' in employee);

